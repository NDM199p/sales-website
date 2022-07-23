const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductDetailsSchema = new Schema({
  categoryId: Schema.Types.ObjectId,
  describe: String,
  video: String,
  name: String,
  slug: String,
  products : [{type: Schema.type.ObjectId, ref:"Product"}]
});

module.exports = ProductDetails = mongoose.model("ProductDetails", ProductDetailsSchema);
