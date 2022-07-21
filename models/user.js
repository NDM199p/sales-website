var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
var { Schema } = mongoose;
var CONFIG = require("../configs/index.config");

const UserSchema = new Schema({
  name: String,
  username: String,
  password: String,
  createDate: Date,
});

UserSchema.methods.verifyPassword = function (password) {
  return bcrypt.compareSync(password, hash);
};

module.exports = User = mongoose.model("User", UserSchema);
