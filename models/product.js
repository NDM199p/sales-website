const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  categoryId: Schema.Types.ObjectId,
  price: Number,
  des: String,
  images: [String],
  name: String,
  slug: String,
});

module.exports = Product = mongoose.model("Product", ProductSchema);
