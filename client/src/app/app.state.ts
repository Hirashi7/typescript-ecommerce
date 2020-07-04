import Singleton from 'src/helpers/singleton.class';
import { NgModule } from '@angular/core';
import User from './models/user.model';
import Cart from './classes/cart.class';

@NgModule()
export default class AppState extends Singleton {
    user: User;
    cart: Cart;

    constructor() {
        super();
        this.user = new User('667', 'jan@kowalski.pl', 'Jan', 'Kowalski');
        this.cart = new Cart();
    }
}