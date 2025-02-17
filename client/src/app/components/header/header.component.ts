import { Component, OnInit } from '@angular/core';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { CategoryService } from 'src/app/services/category.service';
import NavigationLink from 'src/app/models/navigationLink.model';
import Category from 'src/app/models/category.model';
import AppState from 'src/app/app.state';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  icons = {
    faShoppingCart,
    faUser
  };
  navigationLinks = [{}];

  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }
  
  constructor(
    private categoryService: CategoryService,
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.getNavigationLinks();
  }

  getNavigationLinks() {
    this.categoryService.getAll()
    .then(r => {
      if(r.length < 1) return;

      r.forEach((el: Category) => {
        this.navigationLinks.push(
          {
            name: el.title,
            url: '/category',
            param: el.id
          }
        );
      });
    })
  }

  get cartProducts() {
    let appState = AppState.getInstance() as AppState;
    if(!appState.cart) return 0;
    return appState.cart.count;
  }

  logout() {
    this.authService.logout();
  }

}
