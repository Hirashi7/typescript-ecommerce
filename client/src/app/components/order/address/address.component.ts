import { Component, OnInit } from '@angular/core';
import { OrderStateManagament } from 'src/app/classes/order-states';
import OrderStateAddress from 'src/app/classes/order/order.state.address';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  state: OrderStateManagament;
  data = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    zipCode: ''
  };
  
  constructor(private router: Router) {
    this.state = new OrderStateManagament(new OrderStateAddress(), this.router);
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    if(this.state.processStep(this.data)) {
      this.state.nextStep();
    } 
    
  }

}
