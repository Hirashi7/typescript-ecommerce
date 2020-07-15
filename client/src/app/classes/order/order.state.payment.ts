import { OrderState } from "../order-states";
import AppState from 'src/app/app.state';

export default class OrderStatePayment extends OrderState {
    public processStep(data: any): boolean {
        const appState = AppState.getInstance() as AppState;

       appState.setPayment(data);

       return true;
    }

    public previousStep(): void {
        this.context.router.navigate(['/order/step2']);
    }

    public nextStep(): void {
        this.context.router.navigate(['/order/step4']);
    }

}