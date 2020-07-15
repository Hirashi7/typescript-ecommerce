import { Component, OnInit } from '@angular/core';
import { OrderStateManagament } from 'src/app/classes/order-states';
import OrderStateAddress from 'src/app/classes/order/order.state.address';
import { Router } from '@angular/router';
import OrderStateComponent from 'src/app/classes/order/order.state.component';
import Address from 'src/app/models/address.model';
import AppState from 'src/app/app.state';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent extends OrderStateComponent implements OnInit  {
  data = {} as Address;

  ngOnInit(): void {
    const appState = AppState.getInstance() as AppState;
    if(appState.address) {
      this.data = appState.address;
    }
    
  }

  constructor(protected router: Router) {
    super();
    this.init(new OrderStateAddress(), this.router);
  }

}
