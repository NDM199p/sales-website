var express = require("express");
const CategoryController = require("../controllers/category.controller");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/categories", CategoryController.index);

router.get("/category/add", CategoryController.create);

router.post("/category/add", CategoryController.createPOST);

router.get("/category/edit/:category_id", CategoryController.edit);

router.post("/category/edit/:category_id", CategoryController.updatePOST);

router.get("/category/details/:categoryId", CategoryController.details);

router.get("/category/delete/:categoryId", CategoryController.delete);

router.post("/category/delete", CategoryController.deletePOST);

module.exports = router;
