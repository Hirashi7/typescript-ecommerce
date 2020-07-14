import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  logged = false;

  constructor(
    private httpClient: HttpClient,
    private router: Router) {
      const user = localStorage.getItem('currentUser');
      if(user) {
        this.logged = true;
      }
  }

  get isLoggedIn() {
    return this.logged;
  }

  login(user) {
    let request = this.httpClient.post(`${environment.apiUrl}/api/login`, user);

    return new Promise((resolve) => {
      request.subscribe((r: any) => {
        localStorage.setItem('currentUser', JSON.stringify(r));
        this.logged = true;
        resolve(r);
      })
    })
  }

  logout() {
    this.logged = false;
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
