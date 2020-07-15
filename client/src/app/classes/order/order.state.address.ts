import { OrderState } from "../order-states";
import { Router } from '@angular/router';

export default class OrderStateAddress extends OrderState {
    public processStep(data: any): boolean {
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