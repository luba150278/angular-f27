import { Component } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css',
})
export class TagsComponent {
  tags: string[] = [];
  constructor(private postsService: PostService) {
    this.tags = this.postsService.tags;
  }

  getPostsByTag(tag: string) {

  }
}
