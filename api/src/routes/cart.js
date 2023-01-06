const {Router} = require("express");
const cartSchema = require("../models/Cart")
const {postCart,deleteProductCart} = require("../constrollers/cartController")


const router = Router();

// trae todos los cart (es al pedo pero queria probar)
router.get("/", (req, res) => {
  cartSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ mesagge: error}));
});
// trae todos los cart (es al pedo pero queria probar)
router.get("/:id", (req, res) => {
  const {id} = req.params;
  cartSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ mesagge: error}));
});


router.post("/", async (req, res) => {
// Obtén los valores de user_id y product_id del cuerpo de la solicitud
try {
  const cart = req.body;        
  console.log(cart)
  await postCart(cart)
  console.log(cart)
  res.json({ message: "Producto agregado al carrito con éxito" })
  
} catch (error) {
     res.send(error.message) 
    }
} )
// Llamar a la función postCart y proporcionar los argumentos user_id y product_id
 


  router.delete("/:id/:productId", async(req, res) => {
    // Obtén los valores de user_id y product_id de los parámetros de la ruta
    try {
      const cart = req.params
      // const productId = req.params.productId;
      
      // // Llamar a la función deleteProductFromCart y proporcionar los argumentos cart y productId
      console.log(cart)
        await deleteProductCart(cart)
          res.json({ message: "Producto eliminado del carrito con éxito" })
      
    } catch (error) {
      res.send( error.message )
    }
    })

  module.exports = router