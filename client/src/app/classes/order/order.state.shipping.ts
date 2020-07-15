import { OrderState } from "../order-states";

export default class OrderStateShipping extends OrderState {
    public processStep(data: any): boolean {
       return true;
    }

    public previousStep(): void {
        this.context.router.navigate(['/order/step1']);
    }

    public nextStep(): void {
        this.context.router.navigate(['/order/step3']);
    }

}