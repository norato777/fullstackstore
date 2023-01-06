const express = require("express");
const controller = require("../constrollers/index.controllers");
const signUp = require("./signUp.routes");
const signIn = require("./signIn.routes");
const logOut = require("./logOut.routes");
const google = require("./google.routes");
const auth = require("../middleware/auth");
const cart = require ('./cart.js');
const products = require('./products.js');
const users = require ('./users');
require("../middleware/google.js");
const router = express.Router();

router.get("/", controller.index);
router.use('/cart', cart)
router.use('/products', products)
router.use('/users', users)
router.use("/signup", signUp);
router.use("/signin", signIn);
router.use("/logout", logOut);
router.use("/auth", google);

module.exports = router;
