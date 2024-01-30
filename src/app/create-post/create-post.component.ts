import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PostService } from '../services/post.service';
import { setErrorAction } from '../share/store/actions/error.action';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css',
})
export class CreatePostComponent {
  isSuccess: boolean | string = false;
  addPostForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required]),
    tagList: new FormControl(''),
  });

  constructor(
    private store: Store<{ auth: { token: string } }>,
    private router: Router,
    private postService: PostService
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
    if (this.addPostForm.status === 'VALID') {
      const tagList = this.addPostForm.value.tagList.replaceAll(" ", '').split(',');
      this.postService.createPost({ ...this.addPostForm.value, tagList }).subscribe((data) => {
         if ('article' in data) {
           this.isSuccess = 'Post added successfully';
         } else {
           this.store.dispatch(
             setErrorAction({
               message: data.message || '',
               messages: data?.errors?.body || [],
             })
           );
         }
       });
     } else {
       this.store.dispatch(
         setErrorAction({
           message: "Заповніть обов'язкові поля",
           messages: [],
         })
       );
     }

    setTimeout(() => {
      this.isSuccess = false;
       this.store.dispatch(
         setErrorAction({
           message: '',
           messages: [],
         })
       );
     }, 5000);
  }
}
