import * as mongoose from 'mongoose';
import { IProduct } from './product.schema';

export interface ICategory extends mongoose.Document {
    _id: mongoose.Types.ObjectId;
    title: string;
    products: [IProduct];
}

const categorySchema: mongoose.Schema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    title: {
        type: String,
        required: true
    },
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            autopopulate: {
                select: '-__v',
                maxDepth: 1
            }
        }
    ]
});

categorySchema.plugin(require('mongoose-autopopulate'));

export default mongoose.model<ICategory>('Category', categorySchema);