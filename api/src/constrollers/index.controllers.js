const controllers = {};
const ProductsModel = require("../models/Product");
const UserModel = require("../models/Users.js")

controllers.index = async (req, res) => {
  try {
    const allProducts = await ProductsModel.find();
    console.log(allProducts);

    // Query the User model to get all users
    const allUsers = await UserModel.find();
    console.log(allUsers);

    res.send({ allProducts, allUsers }); // send both the products and users in the response
  } catch (error) {
    console.log(error);
  }
};

module.exports = controllers;
