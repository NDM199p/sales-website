var express = require("express");
var router = express.Router();

var ProductControls = require("../controllers/product-details.controller");

router.get("/index", ProductControls.index);
router.get("/create", ProductControls.create);
router.post("/create", ProductControls.createPOST);
router.get("/details/:_id", ProductControls.details);
router.get("/update/:_id", ProductControls.update);
router.post("/update", ProductControls.updatePOST);
router.get("/delete/:_id", ProductControls.delete);
router.post("/delete", ProductControls.deletePOST);

module.exports = router;
