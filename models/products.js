const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    ProductName: {
        type: String,
        require: true,
        trim: true,
    },
    ProductCode: {
        type: String,
        require: true,
        default: 0,
    },
    Price: {
        type: string,
        require: true,
        default: 0,
    },
    Information: {
        type: String,
        require: true,
        trim: true,
    },
    imgLink: {
        type: String,
        require: true,
    },
});
const Product = mongoose.model("Product", ProductSchema, "Product");
module.exports = Product;