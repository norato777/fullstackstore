const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductsSchema = new Schema({
  name:{
    type:String,
    required: true
 },
 image:{
     type: String
 },
 detail:{
     type: String
 },
 price:{
     type: Number
 },
 number:{
     type: Number
 },
 favorites:{
     type: Array
 },
 coments:{
     type: Array
 },
 category:{
     type: Array
 },
});

const ProductsModel = mongoose.model("products", ProductsSchema);

module.exports = ProductsModel;
