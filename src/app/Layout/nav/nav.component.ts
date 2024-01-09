import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { ThemeService } from '../../Core/Services/theme.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MenubarModule, ButtonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  constructor(private readonly themeService: ThemeService) {}

  toggleTheme(): void {
    this.themeService.switchTheme();
  }
  items: MenuItem[] = [
    {
      icon: 'pi pi-fw pi-dollar',
      label: 'Finances',
      routerLink: '',
      iconClass: 'align-left',
    },
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      routerLink: '',
    },
    {
      label: 'Accounts',
      icon: 'pi pi-fw pi-dollar',
      routerLink: 'accounts',
    },
    {
      label: 'Transactions',
      icon: 'pi pi-fw pi-dollar',
      routerLink: 'transactions',
    },
    {
      label: 'Budgets',
      icon: 'pi pi-fw pi-dollar',
      routerLink: 'budgets',
    },
    {
      label: 'Reports',
      icon: 'pi pi-fw pi-dollar',
      routerLink: 'reports',
    },
    {
      label: 'Settings',
      icon: 'pi pi-fw pi-cog',
      routerLink: 'settings',
    },
    {
      label: 'Logout',
      icon: 'pi pi-fw pi-sign-out',
      routerLink: 'about',
    },
  ];
}
