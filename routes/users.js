var express = require("express");
var router = express.Router();
var UserControls = require("../controllers/user.controller")

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/login", UserControls.login)

router.post("/login",   passport.authenticate('local', { failureRedirect: '/login' }), function(req, res, next){
  res.redirect('/user');
}
)

module.exports = router;
