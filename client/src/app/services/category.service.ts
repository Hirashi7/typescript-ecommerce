import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import Category from '../models/category.model';
import CategoryApi from '../models/category.api.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  public getProductsByCategoryId(id: string): Promise<[]> {
    const products = this.http.get<[{}]>('http://localhost:4576/api/category/' + id + '/products');

    return new Promise((resolve) => {
      return products.subscribe((r: any) => {
        resolve(r);
      })
    })
  }

  public getAll(): Promise<Array<Category>> {
    const categories = this.http.get<Array<CategoryApi>>('http://localhost:4576/api/category/');

    return new Promise((resolve) => {
      return categories.subscribe((r) => {

        let parsed = [] as Array<Category>;

        r.forEach((el: CategoryApi) => {
          parsed.push(
            new CategoryApi(
              el._id,
              el.products,
              el.title,
              el.description
            ).getClientModel()
          );
        });

        resolve(parsed);
      })
    })
  }

  public getById(id: string): Promise<{}> {
    const category = this.http.get<Category>('http://localhost:4576/api/category/' + id);

    return new Promise((resolve) => {
      category.subscribe((r) => {
        resolve(r)
      })
    });
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
