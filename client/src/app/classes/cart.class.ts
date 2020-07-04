import User from '../models/user.model';
import Product from '../models/product.model';

export default class Cart {
    user = {} as User;
    products = [] as Array<Product>;

    get total() {
        return 129.99;
    }
}