`use trict`

var User = require("../models/user");

exports.login = function (req, res, next) {
  res.render("auth/login", { layout: "layouts/web" });
};

exports.signup = function (req, res, next) {
  res.render("auth/signup", { layout: "layouts/web" });
};

exports.signupPOST = function (req, res, next) {
  let newUser = new User(req.body);
  newUser.save(function (error, user) {
    if (error) throw error.message;

    res.redirect("/login");
  });
};
