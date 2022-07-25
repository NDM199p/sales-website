"use strict";

const Category = require("../models/category");
const Product = require("../models/product");
const ProductDetails = require("../models/product-details");

function render(res, path, json) {
  res.render(`admin/product-details/${path}`, {
    title: "Products",
    layout: "layouts/admin",
    ...json,
  });
}

exports.index = function (req, res) {
  ProductDetails.find({}, function (error, productDetails) {
    if (error) throw error.message;
    render(res, "index", { productDetails });
  });
};

exports.details = function (req, res) {
  let { _id } = req.params;
  ProductDetails.findById(_id, function (error, productDetails) {
    if (error) throw error.message;
    render(res, "details", { productDetails });
  });
};

exports.create = function (req, res) {
  Category.getCategories(function (error, categories) {
    if (error) throw error.message;
    render(res, "create", { categories });
  });
};

exports.createPOST = function (req, res) {
  let newProductDetail = req.body;
  ProductDetails.create(newProductDetail, function (error, productDetails) {
    if (error) throw error.message;
    res.redirect(`/admin/product/create/${productDetails._id}`);
  });
};

exports.update = function (req, res) {
  let { _id } = req.params;
  ProductDetails.findById(_id, function (error, productDetails) {
    if (error) throw error.message;

    Category.getCategories(function (error1, categories) {
      if (error1) throw error1.message;
      render(res, "update", { productDetails, categories });
    });
  });
};

exports.updatePOST = function (req, res) {
  let { _id } = req.params;
  let newProductDetails = req.body;

  ProductDetails.findByIdAndUpdate(_id, newProductDetails, function (err) {
    if (err) throw err.message;
    res.redirect(`/admin/product-details/index`);
  });
};

exports.delete = function (req, res) {
  let { _id } = req.params;
  ProductDetails.findById(_id, function (error) {
    if (error) throw error.message;
    render(res, "detete", { productDetails });
  });
};

exports.deletePOST = function (req, res) {
  let { _id } = req.body;
  ProductDetails.findByIdAndDelete(_id, function (error) {
    if (error) throw error.message;
    res.redirect("/admin/product/index");
  });
};
