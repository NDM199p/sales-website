const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderSchema = new Schema({
  productId: [Schema.Types.ObjectId],
  priceTotal: Number,
  address: String,
  numberPhone: String,
  createDate: String,
});

module.exports = Cart = mongoose.model("Order", ProductSchema);
