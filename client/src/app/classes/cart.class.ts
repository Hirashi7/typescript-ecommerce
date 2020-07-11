import User from '../models/user.model';
import Product from '../models/product.model';
import CartLine from './cart-line.class';

export default class Cart {
    constructor(
        public user: User, 
        public cartLines: Array<CartLine>) {}

    get total() {
        let sum = 0;
        this.cartLines.forEach(el => {
            sum += el.total;
        });

        return sum;
    }

    public addToCart(cartLine: CartLine) {
        this.cartLines.push(cartLine);
    }

    get count() {
        let count = 0;
        this.cartLines.forEach(el => {
            count += el.quantity;
        });

        return count;
    }

    remove(index) {
        this.cartLines.splice(index, 1);
    }
}