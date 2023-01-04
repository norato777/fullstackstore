const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductsSchema = new Schema({
  name: String,
  image: String,
  detail: String,
  price: Number,
  number: Number,
  coments: Array,
  category: Array,
});

const ProductsModel = mongoose.model("products", ProductsSchema);

module.exports = ProductsModel;
