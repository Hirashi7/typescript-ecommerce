import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import Category from '../models/category.model';
import CategoryApi from '../models/category.api.model';
import { CategoryFactory } from '../factories/category/category.factory';
import { DataFactoryTypes } from '../classes/data.factory.types';
import Product from '../models/product.model';
import { ProductFactory } from '../factories/product/product.factory';
import ProductApi from '../models/product.api.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  public getProductsByCategoryId(id: string): Promise<Array<Product>> {
    const productFactory = new ProductFactory();
    const products = this.http.get<Array<ProductApi>>(`${environment.apiUrl}/api/category/` + id + '/products');

    return new Promise((resolve) => {
      return products.subscribe((r: any) => {
        let parsed: Array<Product> = [];

        r.forEach((el: ProductApi) => {
          parsed.push(
            productFactory.create(DataFactoryTypes.Raw, el)
          );
        });
        resolve(parsed);
      })
    })
  }

  public getAll(): Promise<Array<Category>> {
    const categoryFactory = new CategoryFactory();
    const categories = this.http.get<Array<CategoryApi>>(`${environment.apiUrl}/api/category/`);

    return new Promise((resolve) => {
      return categories.subscribe((r) => {
        let parsed = [] as Array<Category>;

        r.forEach((el: CategoryApi) => {
          parsed.push(
            categoryFactory.create(DataFactoryTypes.Raw, el)
          );
        });
        resolve(parsed);
      })
    })
  }

  public getById(id: string): Promise<{}> {
    const category = this.http.get<Category>(`${environment.apiUrl}/api/category/` + id);

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
