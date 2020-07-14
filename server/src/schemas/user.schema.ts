import * as mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
    _id: mongoose.Types.ObjectId;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
}

const userSchema: mongoose.Schema = new mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        required: true,
        auto: true
    },
    firstName: {
        type: String,
        required: true,
        
    },
    lastName: {
        type: String,
        required: true,
        
    },
    email: {
        type: String,
        required: true,
        
    },
    password: {
        type: String,
        required: true,
        
    }
});

export default mongoose.model<IUser>('User', userSchema);