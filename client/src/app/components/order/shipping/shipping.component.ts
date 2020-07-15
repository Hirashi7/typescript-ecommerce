import { Component, OnInit } from '@angular/core';
import OrderStateComponent from 'src/app/classes/order/order.state.component';
import OrderStateShipping from 'src/app/classes/order/order.state.shipping';
import { Router } from '@angular/router';
import Shipping from 'src/app/models/shipping.model';
import AppState from 'src/app/app.state';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent extends OrderStateComponent implements OnInit {
  data = {} as Shipping;

  methods = [
    new Shipping(1, 'Odbiór osobisty', 0, '/assets/img/shipping/odbior.jpg'),
    new Shipping(2, 'Kurier DHL - dostawa w 3-5 dni roboczych', 11.20, '/assets/img/shipping/dhl.jpg'),
    new Shipping(3, 'Poczta Polska - Kurier 48', 14.90, '/assets/img/shipping/poczta.jpg'),
  ];

  constructor(protected router: Router) {
    super();
    this.init(new OrderStateShipping(), this.router)
    
    const appState = AppState.getInstance() as AppState;
    if(appState.shipping) {
      this.data = this.methods.find((el) => el.id == appState.shipping.id);
    } else {
      this.data = this.methods[0];
    }
   }

  ngOnInit(): void {
  }

}
