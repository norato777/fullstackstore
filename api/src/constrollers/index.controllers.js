const controllers = {};
const connection = require("../DB_connect/connect");
const ProductsModel = require("../models/Products");

controllers.index = async (req, res) => {
  try {
    await connection();
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

