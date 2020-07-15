import Singleton from 'src/helpers/singleton.class';
import { NgModule } from '@angular/core';
import User from './models/user.model';
import Cart from './classes/cart.class';
import Product from './models/product.model';
import CartLine from './classes/cart-line.class';
import Address from './models/address.model';
import Shipping from './models/shipping.model';
import Payment from './models/payment.model';

@NgModule()
export default class AppState extends Singleton {
    user: User;
    cart: Cart;
    address: Address;
    shipping: any;
    payment: any;

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

    setAddress(address) {
        this.address = address;
        this.save();
    }

    setShipping(shipping) {
        this.shipping = shipping;
        this.save();
    }

    setPayment(payment) {
        this.payment = payment;
        this.save();
    }

    save() {
        localStorage.setItem('appState', JSON.stringify(this)); 
    }

    reset() {
        localStorage.removeItem('appState');
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
            this.address = {} as Address;
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

        if(cache.address) {
            this.address = Object.assign(new Address(), cache.address);
        }

        if(cache.shipping) {
            this.shipping = new Shipping(cache.shipping.id, cache.shipping.name, cache.shipping.price, cache.shipping.imagePath);
        }

        if(cache.payment) {
            this.payment = new Payment(cache.payment.id, cache.payment.name, cache.payment.imagePath);
        }
    }
}