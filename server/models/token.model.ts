import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TokenSchema = new Schema({

    expirationTime: {
        type: Date,
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
export const Token = mongoose.model('Token', TokenSchema);