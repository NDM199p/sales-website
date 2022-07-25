"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  productDetailsId: { type: Schema.Types.ObjectId, ref: "ProductDetails" },
  price: Number,
  images: [String],
  amount: Number,
  type: String,
  size: String,
});

ProductSchema.methods.createOrUpdateProduct = function (cb) {
  return this.save(cb);
};

ProductSchema.methods.deleteProductById = function (cb) {
  return mongoose.model("Product").deleteOne({ _id: this._id }, cb);
};

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
