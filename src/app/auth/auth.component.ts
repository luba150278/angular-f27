import { Component, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  NgForm,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  hide = true;

  reactiveForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9]+$/),
    ]),
  });

  constructor() {}

  changeShowPass(event: Event): void {
    event.preventDefault();
    this.hide = !this.hide;
  }

  sumbitReactiveForm() {
    console.log(this.reactiveForm.status);
    console.log(this.reactiveForm.value.email);
  }
}
