import { Component, OnInit } from '@angular/core';
import OrderStateComponent from 'src/app/classes/order/order.state.component';
import OrderStateShipping from 'src/app/classes/order/order.state.shipping';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent extends OrderStateComponent implements OnInit {
  data = {
    shipping: '1'
  }
  constructor(protected router: Router) {
    super();
    this.init(new OrderStateShipping(), this.router)
   }

  ngOnInit(): void {
  }

}
