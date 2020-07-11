import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(protected http: HttpClient) { }

  public getAll(url: string): Promise<[]> {
    const request = this.http.get<[{}]>(`${environment.apiUrl}/api/${url}`);

    return new Promise((resolve) => {
      return request.subscribe((r: any) => {
        resolve(r);
      })
    })
  }

  public getById(url: string, id: string): Promise<{}> {
    const request = this.http.get<{}>(`${environment.apiUrl}/api/${url}/${id}`);

    return new Promise((resolve) => {
      return request.subscribe((r: any) => {
        resolve(r);
      })
    })
  }

  public update(url: string, item): Promise<{}> {
    const request = this.http.patch<{}>(`${environment.apiUrl}/api/${url}/${item._id}`, item);

    return new Promise((resolve) => {
      return request.subscribe((r: any) => {
        resolve(r);
      })
    })
  }

  public create(url: string, item): Promise<{}> {
    const request = this.http.post<{}>(`${environment.apiUrl}/api/${url}`, item);

    return new Promise((resolve) => {
      return request.subscribe((r: any) => {
        resolve(r);
      })
    })
  }

  public delete(url: string, id: string): Promise<{}> {
    const request = this.http.delete<{}>(`${environment.apiUrl}/api/${url}/${id}`);

    return new Promise((resolve) => {
      return request.subscribe((r: any) => {
        resolve(r);
      })
    })
  }
}
