import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { URL } from '../share/backend';
import { IFullUser } from '../share/interfaces/user.interface';
import { IError } from '../share/interfaces/error.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getCurrentUser(): Observable<IFullUser | IError> {
    const url = URL + '/user';
    // {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Authorization: `token ${localStorage.getItem('token')}`,
    //     },
    //   }
    return this.http
      .get<IFullUser>(url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `token ${localStorage.getItem('token')}`,
        },
      })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred
            console.error('An error occurred:', error.error.message);
          } else {
            // The backend returned an unsuccessful response code
            // The response body may contain clues as to what went wrong
            console.error(
              `Backend returned code ${error.status}, body was:`,
              error.error
            );
          }

          // Return an observable with a user-facing error message
          return of(error.error as IError);
        })
      );
  }
}
