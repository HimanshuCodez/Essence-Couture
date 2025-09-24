import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    mrp: { type: Number },
    image: { type: Array, required: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    sizes: { type: Array, required: true },
    bestseller: { type: Boolean },
    date: { type: Number, required: true },
    length: { type: String },
    breadth: { type: String },
    dressType: { type: String },
    styleCode: { type: String },
    countryOfOrigin: { type: String },
    manufacturer: { type: String },
    color: { type: String },
    fabric: { type: String },
    pattern: { type: String },
    sleeveStyle: { type: String },
    sleeveLength: { type: String },
    neck: { type: String },
    hsn: { type: String }
})

const productModel  = mongoose.models.product || mongoose.model("product",productSchema);

export default productModel