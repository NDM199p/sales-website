var mongoose = require("mongoose");
var bcrypt = require('bcryptjs');
var { Schema } = mongoose;
var CONFIG = require("../configs");

const UserSchema = new Schema({
  name: String,
  username: String,
  password: String,
  createDate: Date,
});

UserSchema.methods.verifyPassword = function(password) {
  mongoose.model('Animal').findOne({ username: this.username }, function(error, user){
    if(error) return false;
    bcrypt.compare(CONFIG.BCRYPT_KEY, user.password, function(err, res) {
      // res === true
      if(res) return true;
      return false;
    });
  })
};

module.exports = User = mongoose.model("User", UserSchema);
