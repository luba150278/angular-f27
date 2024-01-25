import { Component } from '@angular/core';
import { IPost } from '../share/post.interface';
import { PostService } from '../services/post.service';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent {
  posts: IPost[] = [];
  total: number = 0;
  isAuth: boolean = false;
  constructor(
    private postService: PostService,
    private store: Store<{ auth: { token: string } }>,
    private router: Router
  ) {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data.articles;
      this.total = data.articlesCount;
    });

    this.store
      .select((state) => state.auth.token)
      .subscribe((token) => {
        this.isAuth = token !== '';
      });
  }

  createPost() {
    this.router.navigate(['/create-post']);
  }
}
