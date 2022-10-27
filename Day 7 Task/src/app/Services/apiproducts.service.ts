import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { InterProduct } from '../Interfaces/inter-product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class APIProductsService {
  httpOption;
  constructor(private httpClient: HttpClient) {
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  getAllProducts(): Observable<InterProduct[]> {
    return this.httpClient.get<InterProduct[]>(`${environment.APIURL}`);
  }

  getProductByCat(catID: number): Observable<InterProduct[]> {
    return this.httpClient.get<InterProduct[]>(
      `${environment.APIURL}?CategoryID=${catID}`
    );
  }

  addProducts(newPrd: InterProduct): Observable<InterProduct> {
    return this.httpClient.post<InterProduct>(
      `${environment.APIURL}`,
      JSON.stringify(newPrd),
      this.httpOption
    ).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
}
