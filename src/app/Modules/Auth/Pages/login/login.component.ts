import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [FormsModule, ButtonModule, InputTextModule],
})
export class LoginComponent {
  form: any = {
    email: null,
    password: null,
  };

  constructor() {}

  onSubmit(): void {
    console.log('form submitted');
  }
}
