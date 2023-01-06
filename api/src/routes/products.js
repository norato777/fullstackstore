const { Router } = require('express');
const router = Router();
const productSchema = require("../models/Product")





router.get("/", (req, res) => {
    productSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ mesagge: error}));
  });
  module.exports = router;