import { OrderState } from "../order-states";
import AppState from 'src/app/app.state';

export default class OrderStateShipping extends OrderState {
    public processStep(data: any): boolean {
        const appState = AppState.getInstance() as AppState;

       appState.setShipping(data);

       return true;
    }

    public previousStep(): void {
        this.context.router.navigate(['/order/step1']);
    }

    public nextStep(): void {
        this.context.router.navigate(['/order/step3']);
    }

}