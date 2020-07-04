import * as express from 'express';
import ProductController from './controllers/product.controller';
import CategoryController from './controllers/category.controller';

const router = express.Router();

const productCtrl = new ProductController();
const categoryCtrl = new CategoryController();

router.get('/products', productCtrl.getAll);
router.post('/products', productCtrl.create);
router.get('/category/:id', categoryCtrl.getById);
router.get('/category/:id/products', categoryCtrl.getProductsByCategoryId);
router.get('/category/children/:id', categoryCtrl.getChildren);
router.get('/category', categoryCtrl.getAll);
router.post('/category', categoryCtrl.create);
router.patch('/category/:id', categoryCtrl.updateById);

export default router;