import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
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
  imports: [FormsModule, ButtonModule, InputTextModule, HttpClientModule],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  constructor(
    private readonly authService: AuthService,
    private readonly formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group<LoginRequest>({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.Login(this.loginForm);
    }
  }
}
