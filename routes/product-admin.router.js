var express = require("express");
var router = express.Router();

var ProductControls = require("../controllers/product.controller");

router.get("/create/:productDetailsId", ProductControls.create);
router.post("/create", ProductControls.createPOST);
router.get("/update/:_id", ProductControls.update);
router.post("/update", ProductControls.updatePOST);
router.get("/delete/:_id", ProductControls.delete);
router.post("/delete", ProductControls.deletePOST);

module.exports = router;
