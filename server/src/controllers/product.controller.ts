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

    public create = (req: express.Request, res: express.Response) => {
        let newProduct = new Product({
            ...req.body
        });
    
        newProduct.save()
        .then((result) => {
            return res.status(200).json({
                message: 'Success',
                result
            })
        })
        .catch((err) => {
            return res.status(500).json({
                error: err
            });
        })
    }
}