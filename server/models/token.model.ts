import {Schema, model} from 'mongoose';

const TokenSchema = new Schema({

    expirationTime: {
        type: Number,
        default: Date.now
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

TokenSchema.pre('validate', function () {
    this.expirationTime = new Date().getTime() + 86400000; // one day valid token
}
);
export const Token = model('Token', TokenSchema);