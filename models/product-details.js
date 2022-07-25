"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductDetailsSchema = new Schema({
  categoryId: Schema.Types.ObjectId,
  describe: String,
  video: String,
  name: String,
  slug: String,
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
});

ProductDetailsSchema.methods.getProductDetails = function (cb) {
  return mongoose.model("ProductDetails").findById(this._id, cb);
  // .populate("productDetailsId")
  // .exec(cb);
};

ProductDetailsSchema.methods.updateById = function (id, cb) {
  return mongoose.model("ProductDetails").findByIdAndUpdate(id, this, cb);
};

ProductDetailsSchema.methods.delObject = function (cb) {
  return mongoose.model("ProductDetails").deleteOne({ _id: this._id }, cb);
};

ProductDetailsSchema.methods.getProductDetailsById = function (cb) {
  return mongoose.model("ProductDetails").findById(this._id, cb);
};

const ProductDetails = mongoose.model("ProductDetails", ProductDetailsSchema);

module.exports = ProductDetails;
