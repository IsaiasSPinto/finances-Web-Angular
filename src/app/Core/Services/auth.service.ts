import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  name: string;
  email: string;
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  Login(request: LoginRequest): Observable<LoginResponse> {}
}
