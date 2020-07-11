import Category from '../models/category.model';
import CategoryApi from '../models/category.api.model';

export default abstract class CategoryCreator {
    public abstract create(type, obj): Category | CategoryApi;
}