import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AuthService } from '../../../../Core/Services/auth.service';
import { LoginRequest } from '../../../../Shared/Auth/Models/LoginRequest';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [
    FormsModule,
    ButtonModule,
    InputTextModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
})
export class LoginComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly formBuilder: NonNullableFormBuilder
  ) {}

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.Login(this.loginForm.value);
    }
  }
}
