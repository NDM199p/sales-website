const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: String,
  username: String,
  password: String,
  createDate: Date,
});

module.exports = User = mongoose.model("User", UserSchema);
