import { Component, OnInit } from '@angular/core';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { CategoryService } from 'src/app/services/category.service';
import NavigationLink from 'src/app/models/navigationLink.model';
import Category from 'src/app/models/category.model';
import AppState from 'src/app/app.state';
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
  
  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getNavigationLinks();
  }

  getNavigationLinks() {
    this.categoryService.getAll()
    .subscribe(r => {
      
      if(r.length < 1) return;

      r.forEach((el: Category) => {
        this.navigationLinks.push(
          {
            name: el.title,
            url: '/category',
            param: el._id
          }
        );
      });
    })
  }

  get cartProducts() {
    let appState = AppState.getInstance() as AppState;
    return appState.cart.products.length;
  }

}
