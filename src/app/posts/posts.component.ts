import { Component } from '@angular/core';
import { IPost } from '../share/post.interface';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent {
  posts: IPost[] = [];
  total: number = 0;
  constructor(private postService: PostService) {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data.articles;
      this.total = data.articlesCount;
    });
  }
}
