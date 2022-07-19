exports.logIn = function (req, res, next) {
  res.render("auth/login", { layout: "layouts/web" });
};
