import Category from '../../models/category.model';
import CategoryApi from '../../models/category.api.model';
import { CategoryFactoryTypes } from './category.factory.types';

export default abstract class CategoryCreator {
    public abstract create(source: CategoryFactoryTypes, obj: any): Category | CategoryApi;
}