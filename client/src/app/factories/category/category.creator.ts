import Category from '../../models/category.model';
import CategoryApi from '../../models/category.api.model';
import { DataFactoryTypes } from 'src/app/classes/data.factory.types';

export default abstract class CategoryCreator {
    public abstract create(source: DataFactoryTypes, obj: any): Category | CategoryApi;
}