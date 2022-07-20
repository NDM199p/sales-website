const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductDetails = new Schema({
  categoryId: Schema.Types.ObjectId,
  describe: String,
  images: [String],
  typeStatus: Boolean,
  sizeStatus: Boolean,
  name: String,
  slug: String,
});


const ProductSchema = new Schema({
  productDetailsId: Schema.Types.ObjectId,
  price: Number,
  images: [String],
  type: String,
  size: String,
});

module.exports = Product = mongoose.model("Product", ProductSchema);
