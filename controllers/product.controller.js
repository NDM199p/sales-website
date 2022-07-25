"use strict";

const Product = require("../models/product");
const ProductDetails = require("../models/product-details");

function render(res, path, json) {
  res.render(`admin/product/${path}`, {
    title: "Categories",
    layout: "layouts/admin",
    ...json,
  });
}

exports.create = function (req, res) {
  let { productDetailsId } = req.params;
  let productDetails = new ProductDetails({ _id: productDetailsId });

  productDetails.getProductDetailsById(function (error, productDetails) {
    if (error) throw error.message;

    if (!productDetails) return res.redirect("/admin/product-details");

    render(res, "create", { productDetails });
  });
};

exports.createPOST = function (req, res) {
  let productData = req.body;
  let newProduct = new Product(productData);

  newProduct.createOrUpdateProduct(function (error, product) {
    if (error) throw error.message;

    res.redirect(`/admin/product-details/update/${productDetailsId}`);
  });
};

exports.update = function (req, res) {
  let { _id } = req.params;
  let product = new Product({ _id });
  product.getProductById(function (error, product) {
    if (error) throw error.message;
    if (!productDt) return res.redirect("/admin/product-details");

    render(res, "update", { product });
  });
};

exports.updatePOST = function (req, res) {
  let productData = req.body;
  let newProduct = new Product(productData);

  newProduct.createOrUpdateProduct(function (error, product) {
    if (error) throw error.message;

    res.redirect(`/admin/product-details/update/${product.productDetailsId}`);
  });
};

exports.delete = function (req, res) {
  let { _id } = req.params;
  let product = new Product({ _id });
  product.getProductById(function (error, product) {
    if (error) throw error.message;

    //   not find froduct
    if (!productDt) return res.redirect("/admin/product-details");

    render(res, "delete", { product });
  });
};

exports.deletePOST = function (req, res) {
  let productData = req.body;
  let product = new Product(productData);
  product.deleteProductById(function (error, product) {
    if (error) throw error.message;

    res.redirect("/admin/product-details/index");
  });
};
