import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-rounting';
  constructor(private authService: AuthService) {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token') || null;
    }
  }
}
