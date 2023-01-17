const mongoose = require("mongoose");
const { Schema } = mongoose;

const CategoriesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  destacada:{
    type: Boolean,
  }
});

const CategoriesModel = mongoose.model("categories", CategoriesSchema);

module.exports = CategoriesModel;
