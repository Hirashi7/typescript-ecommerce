import Category from '../../models/category.model';
import CategoryApi from '../../models/category.api.model';
import { DataFactoryTypes } from 'src/app/classes/data.factory.types';
import ProductApi from 'src/app/models/product.api.model';
import Product from 'src/app/models/product.model';

export default abstract class ProductCreator {
    public abstract create(source: DataFactoryTypes, obj: any): Product | ProductApi;
}