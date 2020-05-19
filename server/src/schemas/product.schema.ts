import * as mongoose from 'mongoose';

export interface IProduct extends mongoose.Document {
    _id: mongoose.Types.ObjectId;
    title: string;
    description: string;
    price: number;
}

const productSchema: mongoose.Schema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        required: true
    },
});

export default mongoose.model<IProduct>('Product', productSchema);