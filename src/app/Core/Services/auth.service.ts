import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from '../../Shared/Auth/Models/LoginRequest';
import { LoginResponse } from '../../Shared/Auth/Models/LoginResponse';
import { Router } from '@angular/router';
import { ApiService } from '../../Data/api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly router: Router,
    private readonly api: ApiService
  ) {}

  Login(request: Partial<LoginRequest>): Observable<LoginResponse> {
    const response = this.api.post<Partial<LoginRequest>, LoginResponse>(
      'Auth/login',
      request
    );

    response.subscribe((data) => {
      if (data.token == null) return alert('Invalid credentials');

      this.StoreToken(data.token);
      this.StoreRefreshToken(data.refreshToken);
      this.router.navigateByUrl('/');
    });

    return response;
  }

  Logout(): void {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/auth/login');
  }

  //this.api.post('auth/register', data);

  IsAuthenticated(): boolean {
    return localStorage.getItem('token') != null;
  }

  RefreshToken(request: any) {
    return this.api.post('auth/refreshToken', request);
  }

  StoreRefreshToken(refreshToken: string) {
    localStorage.setItem('refreshToken', refreshToken);
  }

  GetRefreshToken() {
    return localStorage.getItem('refreshToken');
  }

  GetToken() {
    return localStorage.getItem('token');
  }

  StoreToken(token: string) {
    localStorage.setItem('token', token);
  }
}
