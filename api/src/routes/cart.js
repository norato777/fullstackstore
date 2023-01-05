const express = require("express");
const router = express.Router();

//get cart data

router.get("/cart", async (req, res) => {
  try {
    const cart = await getCart();
    res.status(200).json(cart);
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
    return;
  }
});

//add cart data
router.post("/cart", async (req, res) => {
  try {
    const cart = await addCart(req.body);
    res.status(200).json(cart);
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
    return;
    }
});
// update cart data
router.put("/cart", async (req, res) => {
  try {
    const cart = await updateCart(req.body);
    res.status(200).json(cart);
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
    return;
    }
});
// delete cart data
router.delete("/cart", async (req, res) => {
  try {
    const cart = await deleteCart(req.body);
    res.status(200).json(cart);
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
    return;
  }

});

 // IF USER ID EXISTS ADD PRODUCT TO CART, IF USER ID DOES NOT EXIST CREATE CART AND ADD PRODUCT TO CART
 






module.exports = router;
