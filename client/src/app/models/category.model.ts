import CategoryAdapter from '../adapters/category.adapter';
import CategoryApi from './category.api.model';
import Product from './product.model';
import CategoryFactory from '../factories/category.factory';

export default class Category implements CategoryAdapter {
    constructor(
        public id: string,
        public products: Array<Product>,
        public title: string,
        public description: string,
    ){}

    getApiModel() {
        return new CategoryApi(
            this.id,
            this.products,
            this.title,
            this.description
        );
    }
    
    getClientModel() {
        return this;
    }

    getFactory() {
        return new CategoryFactory();
    }
}