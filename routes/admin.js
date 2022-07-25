"use strict";

var express = require("express");

const CategoryAdminRoute = require("./category-admin.router");
const ProductDetailsAdminRoute = require("./product-details-admin.router");
const ProductAdminRoute = require("./product-admin.router");

const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.use("/category", CategoryAdminRoute);
router.use("/product-details", ProductDetailsAdminRoute);
router.use("/product", ProductAdminRoute);

module.exports = router;
