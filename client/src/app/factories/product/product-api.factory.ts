import ProductCreator from './product.creator';
import { DataFactoryTypes } from 'src/app/classes/data.factory.types';
import ProductApi from 'src/app/models/product.api.model';

export class ProductApiFactory extends ProductCreator {
    public create(source: DataFactoryTypes, obj: any): ProductApi {
        switch (source) {
            case DataFactoryTypes.Raw:
                return ProductApi.getFromRaw(obj);
            
            case DataFactoryTypes.Object:
                return ProductApi.getFromObject(obj);
        
            default:
                throw new Error("Invalid category creator type");
        }
    }
}