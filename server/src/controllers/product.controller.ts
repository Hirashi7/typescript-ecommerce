import * as express from 'express';
import Product, { IProduct } from '../schemas/product.schema';

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

    public getById = async (req: express.Request, res: express.Response) => {
        if(!req.params.id) {
            return res.status(409).json({
                error: 'Invalid request'
            });
        }
        
        this._getById(req.params.id)
        .then(r => {
            return res.status(200).json(r);
        })
        .catch((err) => {
            return res.status(500).json({
                error: err
            });
        })
    }

    private async _getById(id: string): Promise<IProduct> {
        return Product.findById(id)
        .exec()
        .then((result) => result)
        .catch((err) => {
            throw err;
        });
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