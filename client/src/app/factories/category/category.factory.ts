import CategoryCreator from "./category.creator";
import Category from '../../models/category.model';
import { DataFactoryTypes } from 'src/app/classes/data.factory.types';

export class CategoryFactory extends CategoryCreator {
    public create(source: DataFactoryTypes, obj: any): Category {
        switch (source) {
            case DataFactoryTypes.Raw:
                return Category.getFromRaw(obj);
            
            case DataFactoryTypes.Object:
                return Category.getFromObject(obj);
        
            default:
                throw new Error("Invalid category creator type");
        }
    }
}