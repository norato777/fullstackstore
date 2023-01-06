const express = require("express");
const router = express.Router();
const CartModel = require("../models/Cart.js");


const postCart = async function (user_id, product_id) {
    try {
      
      const cart = await Cart.findOne({ user_id });
      
      if (cart) {
     
        cart.product_ids.push(product_id);
        await cart.save();
      } else {
        const newCart = new Cart({
          user_id,
          product_ids: [product_id]
        });
        await newCart.save();
      }
    } catch (error) {
      console.log(error);
    }
  }

  router.post("/cart", (req, res) => {
    // Obtén los valores de user_id y product_id del cuerpo de la solicitud
    const {user_id, product_id} = req.body;        
    // Llamar a la función postCart y proporcionar los argumentos user_id y product_id
    postCart(user_id, product_id)
      .then(() => res.json({ message: "Producto agregado al carrito con éxito" }))
      .catch((error) => res.json({ message: error.message }));
  });
  module.exports = router