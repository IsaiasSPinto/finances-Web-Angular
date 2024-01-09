import { Component } from '@angular/core';

import {
  ReactiveFormsModule,
  FormsModule,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AuthService } from '../../../../Core/Services/auth.service';
import { ToastService } from '../../../../Core/Services/toast.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [FormsModule, ButtonModule, InputTextModule, ReactiveFormsModule],
})
export class LoginComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly formBuilder: NonNullableFormBuilder,
    private readonly toastService: ToastService
  ) {}

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.Login(this.loginForm.value).subscribe({
        next: () => {
          this.toastService.send({
            title: 'Login com sucesso',
            message: 'Message',
            type: 'success',
          });
        },
      });
    }
  }
}
