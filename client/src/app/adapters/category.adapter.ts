import Category from "../models/category.model";
import CategoryApi from '../models/category.api.model';
import CategoryFactory from '../factories/category.factory';

export default interface CategoryAdapter {

    getApiModel(): CategoryApi;

    getClientModel(): Category;

    // getFactory(): CategoryFactory;
}