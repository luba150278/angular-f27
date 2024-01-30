import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { IPostData, IPostResponse, IPosts } from '../share/post.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { URL } from '../share/backend';
import { IError } from '../share/interfaces/error.interface';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  public posts: IPosts = { articles: [], articlesCount: 0 };
  constructor(private http: HttpClient) {
    this.getPosts().subscribe((data) => {
      if ('articles' in data) {
        this.posts = data;
      }
    });
  }
  getPosts(): Observable<IPosts | IError> {
    const url = URL + '/articles';
    return this.http.get<IPosts>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        return of(error.error as IError);
      })
    );
  }

  getPostsByAuthor(id: number): Observable<IPosts | IError> {
    const url = URL + '/articles/?authorId=' + id;
    return this.http.get<IPosts>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        return of(error.error as IError);
      })
    );
  }

  getPostsByTag(tag: string): Observable<IPosts | IError> {
    const url = URL + '/articles/?tag=' + tag;
    return this.http.get<IPosts>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        return of(error.error as IError);
      })
    );
  }
  createPost(body: IPostData): Observable<IPostResponse | IError> {
    const url = URL + '/articles';
    return this.http
      .post<IPostResponse>(
        url,
        { article: { ...body } },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `token ${localStorage.getItem('token')}`,
          },
        }
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return of(error.error as IError);
        })
      );
  }

  changePost(body: IPostData, slug: string): Observable<IPostResponse | IError> {
    const url = URL + '/articles/'+slug;
    return this.http
      .post<IPostResponse>(
        url,
        { article: { ...body } },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `token ${localStorage.getItem('token')}`,
          },
        }
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return of(error.error as IError);
        })
      );
  }
}
