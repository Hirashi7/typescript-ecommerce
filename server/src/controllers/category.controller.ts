import * as express from 'express';
import * as mongoose from 'mongoose';
import Category, { ICategory } from '../schemas/category.schema';


export default class CategoryController {

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

    public updateById = async (req: express.Request, res: express.Response) => {
        if(!req.params.id) {
            return res.status(409).json({
                error: 'Invalid request'
            });
        }
        
        Category.findByIdAndUpdate(req.params.id, req.body)
        .exec()
        .then(r => {
            return res.status(200).json(r);
        })
        .catch((err) => {
            return res.status(500).json({
                error: err
            });
        });
        
    }

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

    public getChildren = async (req: express.Request, res: express.Response) => {
        const id = req.params.id;
        if(!id) {
            return res.status(409).json({
                error: 'Invalid request'
            });
        }

        const parentCategory = await this._getById(id);
        return res.status(200).json(parentCategory);

    }

    public getAll = async (req: express.Request, res: express.Response) => {
        Category.find()
        .exec()
        .then(result => {
            return res.status(200).json(result)
        })
        .catch(err => {
            return res.status(500).json({
                error: err
            })
        });
    }

    public create = async (req: express.Request, res: express.Response) => {
        let newCategory = new Category({
            ...req.body
        });

        newCategory.save()
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

    private async _getById(id: string): Promise<ICategory> {
        return Category.findById(id)
        .exec()
        .then((result) => result)
        .catch((err) => {
            throw err;
        });
    }
}