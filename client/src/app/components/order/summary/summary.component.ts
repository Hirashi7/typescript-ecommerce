import { Component, OnInit } from '@angular/core';
import OrderStateComponent from 'src/app/classes/order/order.state.component';
import OrderStateSummary from 'src/app/classes/order/order.state.summary';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent extends OrderStateComponent implements OnInit {
  data = {
    summary: ''
  }
  constructor(protected router: Router) {
    super();
    this.init(new OrderStateSummary(), this.router)
   }

  ngOnInit(): void {
  }

}
