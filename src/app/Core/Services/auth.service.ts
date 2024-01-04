import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from '../../Shared/Auth/Models/LoginRequest';
import { LoginResponse } from '../../Shared/Auth/Models/LoginResponse';
import { AuthRepositoryService } from '../../Data/Services/auth-repository.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly repository: AuthRepositoryService) {}

  Login(request: LoginRequest): Observable<LoginResponse> {
    const response = this.repository.login(request);

    console.log(response);

    return response;
  }
}
