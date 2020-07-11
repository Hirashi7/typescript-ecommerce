import CategoryAdapter from '../adapters/category.adapter';
import CategoryApi from './category.api.model';
import Product from './product.model';
import CategoryFactory from '../factories/category.creator';

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

    public static getFromRaw(obj: any) {
        return new this(
            obj._id,
            obj.products,
            obj.title,
            obj.description
        );
    }

    public static getFromObject(obj: CategoryApi) {
        return obj.getClientModel();
    }
}