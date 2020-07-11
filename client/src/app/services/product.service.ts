import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import Product from '../models/product.model';
import { ProductFactory } from '../factories/product/product.factory';
import ProductApi from '../models/product.api.model';
import { DataFactoryTypes } from '../classes/data.factory.types';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  public getAll(): Promise<Array<Product>> {
    const categoryFactory = new ProductFactory();
    const categories = this.http.get<Array<ProductApi>>('http://localhost:4577/api/category/');

    return new Promise((resolve) => {
      return categories.subscribe((r) => {
        let parsed = [] as Array<Product>;

        r.forEach((el: ProductApi) => {
          parsed.push(
            categoryFactory.create(DataFactoryTypes.Raw, el)
          );
        });
        resolve(parsed);
      })
    })
  }

  public getById(id: string): Promise<{}> {
    const request = this.http.get<{}>(`${environment.apiUrl}/api/product/${id}`);

    return new Promise((resolve) => {
      return request.subscribe((r: any) => {
        resolve(r);
      })
    })
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
