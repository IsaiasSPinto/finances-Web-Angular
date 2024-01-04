import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from '../../Shared/Auth/Models/LoginRequest';
import { LoginResponse } from '../../Shared/Auth/Models/LoginResponse';
import { AuthRepositoryService } from '../../Data/Services/auth-repository.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly repository: AuthRepositoryService,
    private readonly router: Router
  ) {}

  Login(request: LoginRequest): Observable<LoginResponse> {
    const response = this.repository.login(request);
    response.subscribe((data) => {
      if (data.token == null) return alert('Invalid credentials');

      localStorage.setItem('token', data.token);
      this.router.navigateByUrl('/');
    });

    return response;
  }

  Logout(): void {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/auth/login');
  }

  IsAuthenticated(): boolean {
    return localStorage.getItem('token') != null;
  }
}
