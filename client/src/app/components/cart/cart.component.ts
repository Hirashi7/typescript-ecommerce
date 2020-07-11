import { Component, OnInit } from '@angular/core';
import AppState from 'src/app/app.state';
import Product from 'src/app/models/product.model';
import Cart from 'src/app/classes/cart.class';
import CartLine from 'src/app/classes/cart-line.class';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartLines = [] as Array<CartLine>;
  public appState: AppState;
  constructor() {
    this.appState = AppState.getInstance() as AppState;
  }

  get cartEmpty() {
    return this.appState.cart.count;
  }

  ngOnInit(): void {
    this.cartLines = this.appState.cart.cartLines;
  }

  remove(index) {
    const confirm = window.confirm('Czy na pewno chcesz usunąć produkt z koszyka?');
    if(confirm) {
      this.appState.removeFromCart(index);
    }
    
  }

}
