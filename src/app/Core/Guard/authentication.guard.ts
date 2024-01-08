import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

export const authenticationGuard: CanActivateFn = (route, state) => {
  if (!inject(AuthService).IsAuthenticated()) {
    return inject(Router).createUrlTree(['/login']);
  }

  return true;
};
