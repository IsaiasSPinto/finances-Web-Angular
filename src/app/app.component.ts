import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { ThemeService } from './Core/Services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, InputSwitchModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Finances Web';
  darkMode = false;

  constructor(private readonly themeService: ThemeService) {}

  changeTheme(): void {
    const dark = !this.darkMode;
    this.themeService.switchTheme(dark);
    this.darkMode = dark;
  }
}
