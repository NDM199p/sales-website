const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  productDetailsId: Schema.Types.ObjectId,
  price: Number,
  images: [String],
  count: Number,
  type: String,
  size: String,
});

module.exports = Product = mongoose.model("Product", ProductSchema);
