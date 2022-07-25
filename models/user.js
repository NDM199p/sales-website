"use strict";

var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: String,
  username: String,
  password: String,
  createDate: Date,
});

UserSchema.methods.verifyPassword = function (password) {
  return bcrypt.compareSync(password, hash);
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
