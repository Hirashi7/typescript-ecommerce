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
    return this.appState.cart.total;
  }

}
