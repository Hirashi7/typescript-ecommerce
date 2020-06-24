import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import Category from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  public getProductsByCategoryId(id: string): Observable<[{}]> {
    return this.http.get<[{}]>('http://localhost:3000/api/category/' + id)
      .pipe(
        catchError(this.handleError<[{}]>('getProductsByCategoryId', [{}]))
      );
  }

  public getAll(): Observable<[Category] | [{}]> {
    return this.http.get<[Category]>('http://localhost:3000/api/category/')
      .pipe(
        catchError(this.handleError<[{}]>('getAll', [{}]))
      );
  }

  public getById(id: string): Observable<Category | {}> {
    return this.http.get<Category>('http://localhost:3000/api/category/' + id)
      .pipe(
        catchError(this.handleError<{}>('getById', {}))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
