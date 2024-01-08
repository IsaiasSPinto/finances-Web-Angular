import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './app/Layout/Nav/nav.component';
import { AlertComponent } from './app/Shared/components/alert/alert.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavComponent, AlertComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'financesWeb';
}
