import Singleton from 'src/helpers/singleton.class';
import { NgModule } from '@angular/core';
import User from './models/user.model';
import Cart from './classes/cart.class';
import Product from './models/product.model';
import CartLine from './classes/cart-line.class';

@NgModule()
export default class AppState extends Singleton {
    user: User;
    cart: Cart;

    constructor() {
        super();
        this.load();
    }

    addToCart(product: Product, quantity: number) {
        this.cart.addToCart(new CartLine(product, quantity));
        this.save();
    }

    removeFromCart(index) {
        this.cart.remove(index);
        this.save();
    }

    save() {
        localStorage.setItem('appState', JSON.stringify(this)); 
    }

    load() {
        let cache: any = localStorage.getItem('appState');
        let currentUser: any = localStorage.getItem('currentUser');

        if(currentUser) {
            currentUser = JSON.parse(currentUser);
            this.user = new User(
                currentUser.user._id, 
                currentUser.user.email,
                currentUser.user.firstName,
                currentUser.user.lastName,
            );
        } else {
            this.user = null;
        }

        if(!cache) {
            this.cart = new Cart(this.user, []);
            this.save();
            return;
        }
        cache = JSON.parse(cache);

        if(cache.cart && cache.cart.cartLines) {
            let cartLines = [] as Array<CartLine>;
            cache.cart.cartLines.forEach(el => {
                cartLines.push(new CartLine(el.product, el.quantity));
            });

            this.cart = new Cart(this.user, cartLines);
        }
    }
}