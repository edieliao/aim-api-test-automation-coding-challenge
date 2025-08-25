import mongoose from "mongoose";
import { Schema } from "mongoose";

const skuSchema = new Schema({
    sku: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
});

const Sku = mongoose.model('Sku', skuSchema);

export { Sku };