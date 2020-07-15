import { Component, OnInit } from '@angular/core';
import AppState from 'src/app/app.state';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  public appState: AppState;
  constructor() {
    this.appState = AppState.getInstance() as AppState;
  }

  ngOnInit(): void {
  }

  get cartLines() {
    return this.appState.cart.cartLines;
  }

  get total() {
    return this.appState.cart.total + this.shippingCost;
  }

  get address() {
    return this.appState.address;
  }

  get shippingCost() {
    if(this.appState.shipping !== undefined) {
      return this.appState.shipping.price;
    }
    return 0;
  }

}
