import { Component, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  NgForm,
  FormControl,
  Validators,
} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Store } from '@ngrx/store';
import { loginAction, logoutAction } from '../share/store/actions/auth.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  hide = true;

  reactiveForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private authService: AuthService,
    private store: Store,
    private router: Router
  ) {}

  changeShowPass(event: Event): void {
    event.preventDefault();
    this.hide = !this.hide;
  }

  sumbitReactiveForm() {
    if (this.reactiveForm.status === 'VALID') {
      this.authService
        .login(this.reactiveForm.value.email, this.reactiveForm.value.password)
        .subscribe((data) => {
          if ('user' in data) {
            const { token, username, id } = data.user;
            // if (typeof window !== 'undefined') {
            //   localStorage.setItem('token', token);
            //   localStorage.setItem('username', username);
            //   localStorage.setItem('id', id + '');
            // }
            this.store.dispatch(loginAction({ token, username, id }));
            this.router.navigate(['/']);
          }
        });
    } else {
      console.log('ERRRRRRR');
    }
  }
}
