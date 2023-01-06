const controllers = {};
const connection = require("../DB_connect/connect");
const ProductsModel = require("../models/Product");
const UserModel = require("../models/Users")
const CartModel = require("../models/Cart"); 




controllers.index = async (req, res) => {
  try {
    await connection();
    const allProducts = await ProductsModel.find();
    console.log(allProducts);

    // Query the User model to get all users
    const allUsers = await UserModel.find();
    console.log(allUsers);
    const allCart = await CartModel.find();
    console.log(allCart);

    res.send({ allProducts, allUsers }); // send both the products and users in the response
  } catch (error) {
    console.log(error);
  }
};

module.exports = controllers;

