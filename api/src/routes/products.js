const { Router } = require("express");
const router = Router();
const productSchema = require("../models/Product");
const { putProduct } = require("../constrollers/productsController");

router.get("/", (req, res) => {
  productSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ mesagge: error }));
});

router.get("/:id", (req, res) => {
  productSchema
    .findById(req.params.id)
    .then((product) => res.json(product))
    .catch((error) => res.json({ message: error }));
});

router.post("/", (req,res) =>{
  const product = productSchema(req.body);
  product
  .save()
  .then((data)=> res.json(data))
  .catch((error)=> res.json({message: error.message}))
})

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const product = req.body;
  putProduct(id, product)
    .then((product) => res.json(product))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
