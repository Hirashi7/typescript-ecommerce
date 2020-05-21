import * as express from 'express';
import ProductController from './controllers/product.controller';
import CategoryController from './controllers/category.controller';

const router = express.Router();

const productCtrl = new ProductController();
const categoryCtrl = new CategoryController();

router.get('/products', productCtrl.getAll);
router.get('/category/:id', categoryCtrl.getProductsByCategoryId);

export default router;