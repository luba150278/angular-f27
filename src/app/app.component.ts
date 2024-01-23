import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-rounting';
  constructor(private authService: AuthService, private store: Store) {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token') || null;
      if (token) {
        this.authService
          .getCurrentUser()
          .subscribe((data) => console.log(data));
      }
    }
  }
}
