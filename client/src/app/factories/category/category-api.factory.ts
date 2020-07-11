import CategoryCreator from "./category.creator";
import CategoryApi from '../../models/category.api.model';
import { DataFactoryTypes } from 'src/app/classes/data.factory.types';

export class CategoryApiFactory extends CategoryCreator {
    public create(source: DataFactoryTypes, obj: any): CategoryApi {
        switch (source) {
            case DataFactoryTypes.Raw:
                return CategoryApi.getFromRaw(obj);
            
            case DataFactoryTypes.Object:
                return CategoryApi.getFromObject(obj);
        
            default:
                throw new Error("Invalid category creator type");
        }
    }
}