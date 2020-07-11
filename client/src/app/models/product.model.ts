import ProductAdapter from '../adapters/product.adapter';
import ProductApi from './product.api.model';

export default class Product implements ProductAdapter{
    constructor(
        public id: string,
        public description: string,
        public title: string,
        public price: Number,
        public imagePath: string,
        public type: Number
    ) {}

    getClientModel(): Product {
        return this;
    }

    getApiModel() {
        return new ProductApi(
            this.id,
            this.description,
            this.title,
            this.price,
            this.imagePath,
            this.type
        );
    }
}