import * as express from 'express';
import * as mongoose from 'mongoose';
import Category from '../schemas/category.schema';


export default class CategoryController {
    public getProductsByCategoryId = (req: express.Request, res: express.Response) => {
        if(!req.params.id) {
            return res.status(409).json({
                error: 'Invalid request'
            });
        }

        Category.findById(req.params.id)
        .exec()
        .then((result) => {
            return res.status(200).json(result.products);
        })
        .catch((err) => {
            return res.status(500).json({
                error: err
            });
        })
    }
}