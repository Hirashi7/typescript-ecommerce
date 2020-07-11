import CategoryCreator from "./category.creator";
import { CategoryFactoryTypes } from './category.factory.types';
import Category from '../../models/category.model';

export class CategoryFactory extends CategoryCreator {
    public create(source: CategoryFactoryTypes, obj: any): Category {
        switch (source) {
            case CategoryFactoryTypes.Raw:
                return Category.getFromRaw(obj);
            
            case CategoryFactoryTypes.Object:
                return Category.getFromObject(obj);
        
            default:
                throw new Error("Invalid category creator type");
        }
    }
}