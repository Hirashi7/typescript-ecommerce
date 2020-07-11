import ProductApi from '../models/product.api.model';
import Product from '../models/product.model';

export default interface ProductAdapter {

    getApiModel(): ProductApi;

    getClientModel(): Product;
}