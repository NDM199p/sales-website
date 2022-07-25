const mongoose = require("mongoose");
const { Schema } = mongoose;

const CategorySchema = new Schema({
  name: String,
  describe: String,
  image: String,
  create_date: Date,
  slug: String,
});

CategorySchema.statics.getCategories = function (cb) {
  return this.find({}, cb);
};

module.exports = Category = mongoose.model("Category", CategorySchema);
