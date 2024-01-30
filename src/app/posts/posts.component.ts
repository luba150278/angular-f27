import { Component } from '@angular/core';
import { IPost } from '../share/post.interface';
import { PostService } from '../services/post.service';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { setErrorAction } from '../share/store/actions/error.action';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent {
  posts: IPost[] = [];
  total: number = 0;
  isAuth: boolean = false;
  id = 0;
  isFilter = false;
  constructor(
    private postService: PostService,
    private store: Store<{ auth: { token: string; id: number } }>,
    private router: Router
  ) {
    this.cancelFilters();

    this.store
      .select((state) => state.auth)
      .subscribe(({ token, id }) => {
        this.isAuth = token !== '';
        this.id = id || 0;
      });
  }

  createPost() {
    this.router.navigate(['/create-post']);
  }

  getAuthorPosts() {
    this.postService.getPostsByAuthor(this.id).subscribe((data) => {
      if ('articles' in data) {
        this.posts = data.articles;
        this.total = data.articlesCount;
      } else {
        this.store.dispatch(
          setErrorAction({
            message: data.message || '',
            messages: data?.errors?.body || [],
          })
        );

        setTimeout(() => {
          this.store.dispatch(
            setErrorAction({
              message: '',
              messages: [],
            })
          );
        }, 5000);
      }
    });
    this.isFilter = true;
  }

  cancelFilters() {
      this.postService.getPosts().subscribe((data) => {
        if ('articles' in data) {
          this.posts = data.articles;
          this.total = data.articlesCount;
        } else {
          this.store.dispatch(
            setErrorAction({
              message: data.message || '',
              messages: data?.errors?.body || [],
            })
          );

          setTimeout(() => {
            this.store.dispatch(
              setErrorAction({
                message: '',
                messages: [],
              })
            );
          }, 5000);
        }
      });
    this.isFilter = false;
  }

  getPostsByTag(tag: string) {
    this.postService.getPostsByTag(tag).subscribe((data) => {
      if ('articles' in data) {
        this.posts = data.articles;
        this.total = data.articlesCount;
      } else {
        this.store.dispatch(
          setErrorAction({
            message: data.message || '',
            messages: data?.errors?.body || [],
          })
        );

        setTimeout(() => {
          this.store.dispatch(
            setErrorAction({
              message: '',
              messages: [],
            })
          );
        }, 5000);
      }
    });
    this.isFilter = true;
  }


  changePost(slug: string) {
    console.log(slug)
    this.router.navigate([`/change-post/${slug}`]);
  }
}
