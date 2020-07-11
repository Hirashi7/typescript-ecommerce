import Product from './product.model';

export default class ProductApi {
    constructor(
        public _id: string,
        public description: string,
        public title: string,
        public price: number,
        public imagePath: string,
        public type: number
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

    public static getFromObject(obj: ProductApi) {
        return obj.getApiModel();
    }


}