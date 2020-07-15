import { Router } from '@angular/router';
import { OrderStateManagament, OrderState } from '../order-states';
import OrderStateAddress from './order.state.address';

export default abstract class OrderStateComponent {
    protected state: OrderStateManagament;
    protected abstract data;
    protected router: Router;

    init(componentState: OrderState, router: Router) {
        this.router = router;
        this.state = new OrderStateManagament(componentState, this.router);
    }
    
    onSubmit() {
        if(this.state.processStep(this.data)) {
          this.state.nextStep();
        } 
    }
}