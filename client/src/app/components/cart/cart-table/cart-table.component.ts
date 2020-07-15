import { Component, OnInit } from '@angular/core';
import AppState from 'src/app/app.state';
import CartLine from 'src/app/classes/cart-line.class';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.scss']
})
export class CartTableComponent implements OnInit {

  cartLines = [] as Array<CartLine>;
  public appState: AppState;
  constructor() {
    this.appState = AppState.getInstance() as AppState;
  }

  get cartEmpty() {
    return this.appState.cart.count;
  }

  get total() {
    return this.appState.cart.total + this.shipping;
  }

  get shipping() {
    if(this.appState.shipping !== undefined) {
      return this.appState.shipping.price;
    }
    return 0;
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
