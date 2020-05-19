import * as express from 'express';
import ProductController from './controllers/product.controller';

const router = express.Router();

const productCtrl = new ProductController();

router.get('/products', productCtrl.getAll);

export default router;