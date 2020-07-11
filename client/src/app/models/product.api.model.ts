import Product from './product.model';

export default class ProductApi {
    constructor(
        public _id: string,
        public description: string,
        public title: string,
        public price: Number,
        public imagePath: string,
        public type: Number
    ) {}

    getClientModel(): Product {
        return new Product(
            this._id,
            this.description,
            this.title,
            this.price,
            this.imagePath,
            this.type
        );
    }

    getApiModel() {
        return this;
    }


}