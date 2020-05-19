import * as express from 'express';
import Product from '../schemas/product.schema';

export default class ProductController {
    public getAll = (req: express.Request, res: express.Response) => {
        Product.find()
        .then((result) => {
            return res.status(200).json(result);
        })
        .catch((err) => {
            return res.status(500).json({
                error: err
            })
        })
    }
}