import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarModule, ButtonModule, AvatarModule],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  isVisible = true;
  constructor() {}

  closeCallback(e: Event): void {
    console.log('closeCallback', e);
  }
}
