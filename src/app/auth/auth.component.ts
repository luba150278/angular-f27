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
  @ViewChild('regForm') regForm!: NgForm;

  buildForm!: FormGroup;

  reactiveForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9]+$/),
    ]),
  });

  constructor(private formBuilder: FormBuilder) {
    this.buildForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)],
      ],
    });
  }
  sumbitForm(form: NgForm) {
    console.log(form.value.email);
  }

  changeShowPass(event: Event): void {
    event.preventDefault();
    this.hide = !this.hide;
  }

  sumbitViewForm() {
    console.log(this.regForm.value.email);
    console.log(this.regForm.value.password);
  }

  sumbitBuilderForm() {
    console.log(this.buildForm.status);
    console.log(this.buildForm.value.email);
  }

  sumbitReactiveForm() {
    console.log(this.reactiveForm.status);
    console.log(this.reactiveForm.value.email);
  }
}
