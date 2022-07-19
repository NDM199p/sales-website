var express = require("express");
const UserController = require("../controllers/user.controller");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/login", UserController.logIn);

module.exports = router;
