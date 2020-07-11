import Product from '../models/product.model';

export default class CartLine {
    constructor(
        public product: Product, 
        public quantity: number) {}

    get total() {
        return this.product.price * this.quantity;
    }
}