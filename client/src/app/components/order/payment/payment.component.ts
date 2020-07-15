import { Component, OnInit } from '@angular/core';
import OrderStateComponent from 'src/app/classes/order/order.state.component';
import { Router } from '@angular/router';
import OrderStateShipping from 'src/app/classes/order/order.state.shipping';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent extends OrderStateComponent implements OnInit {
  data = {
    payment: '1'
  }
  constructor(protected router: Router) {
    super();
    this.init(new OrderStateShipping(), this.router)
   }

  ngOnInit(): void {
  }

}
