import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AuthService } from '../../../../Core/Services/auth.service';
import { LoginRequest } from '../../../../Shared/Auth/Models/LoginRequest';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [FormsModule, ButtonModule, InputTextModule, HttpClientModule],
})
export class LoginComponent {
  form: LoginRequest = {
    email: '',
    password: '',
  };

  constructor(private readonly authService: AuthService) {}

  onSubmit(): void {
    let response = this.authService.Login(this.form);

    response.subscribe((data) => {
      console.log(data);
    });
  }
}
