"use strict";

const Category = require("../models/category");

function render(res, path, json) {
  res.render(`admin/category/${path}`, {
    title: "Categories",
    layout: "layouts/admin",
    ...json,
  });
}

exports.index = function (req, res) {
  Category.find({}, function (error, categories) {
    if (error) throw error.message;

    render(res, "index", { categories });
  });
};

exports.details = function (req, res) {
  let _id = req.params.categoryId;
  Category.findById(_id, function (error, category) {
    if (error) throw error.message;

    render(res, "details", { category });
  });
};

exports.delete = function (req, res) {
  let _id = req.params.categoryId;

  Category.findById(_id, function (error, category) {
    if (error) throw error.message;

    render(res, "delete", { category });
  });
};

exports.deletePOST = function (req, res) {
  let _id = req.body._id;
  Category.deleteOne({ _id }, function (error, result) {
    if (error) throw error.message;

    res.redirect("/admin/categories");
  });
};

exports.create = function (req, res) {
  render(res, "add");
};

exports.createPOST = function (req, res) {
  let data = req.body;
  let newCategory = new Category(data);
  newCategory.save(function (error, result) {
    if (error) throw error.message;

    res.redirect("/admin/categories");
  });
};

exports.edit = function (req, res) {
  let _id = req.params.category_id;
  Category.findById(_id, function (error, category) {
    if (error) throw error.message;

    render(res, "edit", { category });
  });
};

exports.updatePOST = function (req, res) {
  let newCategory = req.body;
  Category.findOneAndUpdate(
    { _id: req.params.category_id },
    newCategory,
    function (error, result) {
      if (error) throw error.message;

      res.redirect("/admin/categories");
    }
  );
};
