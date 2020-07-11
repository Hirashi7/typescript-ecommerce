import ProductCreator from './product.creator';
import { DataFactoryTypes } from 'src/app/classes/data.factory.types';
import Product from 'src/app/models/product.model';

export class ProductFactory extends ProductCreator {
    public create(source: DataFactoryTypes, obj: any): Product {
        switch (source) {
            case DataFactoryTypes.Raw:
                return Product.getFromRaw(obj);
            
            case DataFactoryTypes.Object:
                return Product.getFromObject(obj);
        
            default:
                throw new Error("Invalid category creator type");
        }
    }
}