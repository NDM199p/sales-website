const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductTypeSchema = new Schema({
  productId: Schema.Types.ObjectId,
  categoryId: Schema.Types.ObjectId,
  price: Number,
  describe: String,
  images: [String],
  name: String,
  slug: String,
});

module.exports = ProductType = mongoose.model("ProductType", ProductSchema);
