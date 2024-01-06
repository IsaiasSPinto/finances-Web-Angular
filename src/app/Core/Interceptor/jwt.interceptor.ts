import {
  HttpErrorResponse,
  HttpHandler,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from '../Services/auth.service';
import { LoginResponse } from '../../Shared/Auth/Models/LoginResponse';
import { Router } from '@angular/router';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  var authService = inject(AuthService);
  var route = inject(Router);

  const token = authService.GetToken();

  req = req.clone({
    setHeaders: { Authorization: `Bearer ${token}` },
  });

  return next(req).pipe(
    catchError((error: any) => {
      if (error instanceof HttpErrorResponse && error.status === 401) {
        return handleUnauthorizedError(authService, route, req, next);
      }
      return throwError(() => new Error(error.message));
    })
  );
};

function handleUnauthorizedError(
  authService: AuthService,
  route: Router,
  req: HttpRequest<any>,
  next: HttpHandlerFn
) {
  const acessToken = authService.GetToken();
  const refreshToken = authService.GetRefreshToken();

  var body = {
    token: acessToken,
    refreshToken: refreshToken,
  };

  return authService.RefreshToken(body).pipe(
    switchMap((response: any) => {
      authService.StoreToken(response.token);
      authService.StoreRefreshToken(response.refreshToken);
      req = req.clone({
        setHeaders: { Authorization: `Bearer ${response.token}` },
      });

      return next(req);
    }),
    catchError((error) => {
      return throwError(() => {
        console.log('token expirou');
        route.navigateByUrl('/auth/login');
      });
    })
  );
}
