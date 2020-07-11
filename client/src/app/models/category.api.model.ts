import CategoryAdapter from '../adapters/category.adapter';
import Category from './category.model';
import Product from './product.model';

export default class CategoryApi implements CategoryAdapter {
    constructor(
        public _id: string,
        public products: Array<Product>,
        public title: string,
        public description: string,
    ){}

    getApiModel() {
        return this;
    }

    getClientModel() {
        return new Category(
            this._id,
            this.products,
            this.title,
            this.description
        );
    }
}