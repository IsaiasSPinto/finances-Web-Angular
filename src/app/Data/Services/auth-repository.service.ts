import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { LoginRequest } from '../../Shared/Auth/Models/LoginRequest';
import { LoginResponse } from '../../Shared/Auth/Models/LoginResponse';

@Injectable({
  providedIn: 'root',
})
export class AuthRepositoryService {
  constructor(private readonly api: ApiService) {}

  login(data: LoginRequest) {
    return this.api.post<LoginRequest, LoginResponse>('auth/login', data);
  }

  register(data: any) {
    return this.api.post('auth/register', data);
  }
}
