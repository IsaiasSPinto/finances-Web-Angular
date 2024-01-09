import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './app/Layout/Nav/nav.component';
import { AlertComponent } from './app/Shared/components/alert/alert.component';
import { SidebarComponent } from './app/Layout/sidebar/sidebar.component';
import { SplitterModule } from 'primeng/splitter';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavComponent,
    AlertComponent,
    SidebarComponent,
    SplitterModule,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'financesWeb';
}
