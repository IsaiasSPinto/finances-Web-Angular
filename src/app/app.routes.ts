import { Routes } from '@angular/router';
import { HomeComponent } from './Modules/home/Pages/home.component';
import { LoginComponent } from './Modules/Auth/Pages/login/login.component';
import { RegisterComponent } from './Modules/Auth/Pages/register/register.component';
import { authenticationGuard } from './Core/Guard/authentication.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [authenticationGuard],
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
