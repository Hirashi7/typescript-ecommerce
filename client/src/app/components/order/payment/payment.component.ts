import { Component, OnInit } from '@angular/core';
import OrderStateComponent from 'src/app/classes/order/order.state.component';
import { Router } from '@angular/router';
import OrderStatePayment from 'src/app/classes/order/order.state.payment';
import Payment from 'src/app/models/payment.model';
import AppState from 'src/app/app.state';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent extends OrderStateComponent implements OnInit {
  data = {} as Payment;

  methods = [
    new Payment(1, 'Płatność przy odbiorze', '/assets/img/shipping/odbior.jpg'),
    new Payment(2, 'PayU - Bezpiecznie płatności on-line', '/assets/img/payment/payu.jpg'),
    new Payment(3, 'Płatność kartą (Visa, Mastercard)', '/assets/img/payment/card.jpg'),
  ];

  constructor(protected router: Router) {
    super();
    this.init(new OrderStatePayment(), this.router)

    const appState = AppState.getInstance() as AppState;
    if(appState.payment) {
      this.data = this.methods.find((el) => el.id == appState.payment.id);
    } else {
      this.data = this.methods[0];
    }
   }

  ngOnInit(): void {
  }

}
