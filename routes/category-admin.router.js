var express = require("express");

const CategoryController = require("../controllers/category.controller");

const router = express.Router();

router.get("/index", CategoryController.index);
router.get("/add", CategoryController.create);
router.post("/add", CategoryController.createPOST);
router.get("/edit/:category_id", CategoryController.edit);
router.post("/edit/:category_id", CategoryController.updatePOST);
router.get("/details/:categoryId", CategoryController.details);
router.get("/delete/:categoryId", CategoryController.delete);
router.post("/delete", CategoryController.deletePOST);

module.exports = router;
