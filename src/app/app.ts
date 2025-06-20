import { Component, inject } from '@angular/core';

import {  HeaderComponent } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { Footer } from "./components/footer/footer";
import { LoginComponent } from "./auth/login/login";
import { RegistrationComponent } from "./auth/registration/registration";
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth';


@Component({
  selector: 'app-root',
  imports: [ CommonModule,Hero, Footer, LoginComponent, RegistrationComponent, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'trading';
   authService = inject(AuthService);
}
