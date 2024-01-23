import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Store } from '@ngrx/store';
import { loginAction } from './share/store/actions/auth.action';

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
      console.log(token);
      if (token) {
        this.authService.getCurrentUser().subscribe((data) => {
          if ('user' in data) {
            const { token, username, id } = data.user;
            store.dispatch(loginAction({ token, username, id }));
          }
        });
      }
    }
  }
}
