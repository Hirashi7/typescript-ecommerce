import { Router } from '@angular/router';

export class OrderStateManagament {
    private state: OrderState;
    public router: Router;

    constructor(state: OrderState, router: Router) {
        this.router = router;
        this.transitionTo(state);
    }

    public transitionTo(state: OrderState): void {
        this.state = state;
        this.state.setContext(this);
    }

    public processStep(data): boolean {
        return this.state.processStep(data);
    }

    public nextStep() {
        this.state.nextStep();
    }

    public previousStep() {
        this.state.previousStep();
    }
}

export abstract class OrderState {
    protected context: OrderStateManagament;

    public setContext(context: OrderStateManagament) {
        this.context = context;
    }

    public abstract processStep(data): boolean;

    public abstract previousStep(): void;

    public abstract nextStep(): void;
}