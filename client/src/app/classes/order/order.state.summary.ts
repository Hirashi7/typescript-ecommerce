import { OrderState } from "../order-states";
import AppState from 'src/app/app.state';

export default class OrderStateSummary extends OrderState {
    public processStep(data: any): boolean {
        const appState = AppState.getInstance() as AppState;

        appState.reset();

        return true;
    }

    public previousStep(): void {
        this.context.router.navigate(['/order/step3']);
    }

    public nextStep(): void {
        this.context.router.navigate(['/order/thankyou']);
    }

}