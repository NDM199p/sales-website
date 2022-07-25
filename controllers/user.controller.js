"use strict";

var User = require("../models/user");

exports.login = function (req, res) {
  res.render("auth/login", { layout: "layouts/web" });
};

exports.signup = function (req, res) {
  res.render("auth/signup", { layout: "layouts/web" });
};

exports.signupPOST = function (req, res) {
  let newUser = new User(req.body);
  newUser.save(function (error, user) {
    if (error) throw error.message;

    res.redirect("/login");
  });
};
