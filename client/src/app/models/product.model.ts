import ProductAdapter from '../adapters/product.adapter';
import ProductApi from './product.api.model';

export default class Product implements ProductAdapter{
    constructor(
        public id: string,
        public description: string,
        public title: string,
        public price: number,
        public imagePath: string,
        public type: number
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

    public static getFromRaw(obj: any) {
        return new this(
            obj._id,
            obj.description,
            obj.title,
            obj.price,
            obj.imagePath,
            obj.type
        );
    }

    public static getFromObject(obj: Product) {
        return obj.getClientModel();
    }
}