import { Component, OnInit } from '@angular/core';
import { OrderStateManagament } from 'src/app/classes/order-states';
import OrderStateAddress from 'src/app/classes/order/order.state.address';
import { Router } from '@angular/router';
import OrderStateComponent from 'src/app/classes/order/order.state.component';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent extends OrderStateComponent implements OnInit  {
  data = {
    firstName: 'Grzegorz',
    lastName: 'Wójcik',
    email: 'test@test.pl',
    phone: '',
    address1: 'ul. Konstytucji 3 Maja 14/7',
    address2: '',
    city: 'Rzeszów',
    zipCode: '39-056'
  };

  ngOnInit(): void {

  }

  constructor(protected router: Router) {
    super();
    this.init(new OrderStateAddress(), this.router);
  }

}
