const mongoose = require("mongoose");
const { Schema } = mongoose;

const StatusOrderSchema = new Schema({
  orderId: Schema.Types.ObjectId,
  name: String,
  value: String,
  createDate: Date
});

module.exports = StatusOrder = mongoose.model("StatusOrder", ProductSchema);
