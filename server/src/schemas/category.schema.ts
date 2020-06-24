import * as mongoose from 'mongoose';
import { IProduct } from './product.schema';

export interface ICategory extends mongoose.Document {
    _id: mongoose.Types.ObjectId;
    title: string;
    products: [IProduct];
}

const categorySchema: mongoose.Schema = new mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        required: true,
        auto: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        default: null
    },
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
});

categorySchema.plugin(require('mongoose-autopopulate'));

export default mongoose.model<ICategory>('Category', categorySchema);