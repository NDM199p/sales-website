var express = require("express");
var router = express.Router();
var UserControls = require("../controllers/user.controller");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
