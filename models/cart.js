const mongoose = require("mongoose");
const { Schema } = mongoose;

const CartSchema = new Schema({
  productId: [Schema.Types.ObjectId],
  priceTotal: Number,
  
});

module.exports = Cart = mongoose.model("Cart", ProductSchema);
