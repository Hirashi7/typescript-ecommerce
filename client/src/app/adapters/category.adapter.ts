import Category from "../models/category.model";
import CategoryApi from '../models/category.api.model';

export default interface CategoryAdapter {

    getApiModel(): CategoryApi;

    getClientModel(): Category;

}