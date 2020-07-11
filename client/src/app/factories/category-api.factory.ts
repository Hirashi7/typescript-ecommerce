import CategoryCreator from "./category.creator";
import { CategoryFactoryTypes } from './category.factory.types';
import CategoryApi from '../models/category.api.model';

export class CategoryApiFactory extends CategoryCreator {
    public create(source: CategoryFactoryTypes, obj: any): CategoryApi {
        switch (source) {
            case CategoryFactoryTypes.Raw:
                return CategoryApi.getFromRaw(obj);
            
            case CategoryFactoryTypes.Object:
                return CategoryApi.getFromObject(obj);
        
            default:
                throw new Error("Invalid category creator type");
        }
    }
}