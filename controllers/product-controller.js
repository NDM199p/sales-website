var ProductDetails = require("../models/product");

function render(res, path, json) {
    res.render(`admin/product/${path}`, {
      title: "Products",
      layout: "layouts/admin",
      ...json,
    });
  }

exports.index = function(req, res, next){
    ProductDetails.find({}, function(error, products){
        if(error) throw error.message;
        render(res, "index", products);
    })
}