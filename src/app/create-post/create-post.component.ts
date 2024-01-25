import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css',
})
export class CreatePostComponent {
  addPostForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required]),
    tagList: new FormControl(''),
  });

  constructor(
    private store: Store<{ auth: { token: string } }>,
    private router: Router
  ) {
    this.store
      .select((state) => state.auth.token)
      .subscribe((token) => {
        if (token === '') {
          this.router.navigate(['/posts']);
        }
      });
  }

  sumbitForm() {

  }
}
