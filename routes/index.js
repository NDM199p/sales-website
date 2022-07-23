var express = require("express");
var passport = require("passport");
var bcrypt = require("bcryptjs");

const UserControls = require("../controllers/user.controller");
const User = require("../models/user");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("haha", { layout: "layouts/web" });
});

router.get("/create-admin", function (req, res, next) {
  let password = bcrypt.hashSync("root", 10);
  let user = {
    name: "root",
    username: "root",
    password: password,
  };
  let newUser = new User(user);
  newUser.save(function (error, user) {
    if (error) return console.log(error.message);
    res.redirect("/");
  });
});

router.get("/login", UserControls.login);

router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  function (req, res, next) {
    res.redirect("/user");
  }
);

module.exports = router;
