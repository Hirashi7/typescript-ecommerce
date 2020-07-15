import { OrderState } from "../order-states";

export default class OrderStatePayment extends OrderState {
    public processStep(data: any): boolean {
       return true;
    }

    public previousStep(): void {
        this.context.router.navigate(['/order/step2']);
    }

    public nextStep(): void {
        this.context.router.navigate(['/order/step4']);
    }

}