import { OrderState } from "../order-states";
import { Router } from '@angular/router';
import AppState from 'src/app/app.state';

export default class OrderStateAddress extends OrderState {
    public processStep(data: any): boolean {
       const appState = AppState.getInstance() as AppState;

       appState.setAddress(data);
       
       return true;
    }

    public previousStep(): void {
        this.context.router.navigate(['/cart']);
    }

    public nextStep(): void {
        console.log(this.context);
        this.context.router.navigate(['/order/step2']);
    }

}