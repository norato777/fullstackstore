const ProductsModel = require("../models/Product.js");

module.exports = {
  putProduct: async function (id, product) {
    try {
      const oldProduct = await ProductsModel.findByIdAndUpdate(id);
      if (oldProduct) {
        oldProduct.quantity = product.quantity;
        oldProduct.price = product.price;
        console.log("Actualizado");
      }
      await oldProduct.save();
    } catch (error) {
      console.log(error);
    }
  },
};
