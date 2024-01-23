import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPosts } from '../share/post.interface';
import { HttpClient } from '@angular/common/http';
import { URL } from '../share/backend';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  public posts: IPosts = { articles: [], articlesCount: 0 };
  constructor(private http: HttpClient) {
    this.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }
  getPosts(): Observable<IPosts> {
    const url = URL + '/articles';
    return this.http.get<IPosts>(url);
  }
}
