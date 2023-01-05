const express = require("express");
const router = express.Router();
const ProductsModel = require("../models/product");

// create product

router.post("/create", async (req, res) => {
  try {
    const product = new ProductsModel(req.body);
    const result = await product.save();
    res.status(201).json(result);
    console.log(result);
    res.end();
    return;
    } catch (error) {
    console.log(error);
    res.status(500).json(error);
    return;
    }
});

// get all products

router.get("/all", async (req, res) => {
  try {
    const products = await ProductsModel.find();
    res.status(200).json(products);
    return;
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
        return;

    }
});

// get product by id

router.get("/product/:id", async (req, res) => {
  try {
    const product = await ProductsModel.findById(req.params.id);
    res.status(200).json(product);
    return;
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
        return;

    }
});

// update product

router.put("/product/:id", async (req, res) => {
  try {
    const product = await ProductsModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(product);
    return;
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
        return;

    }
});

// delete product by id

router.delete("/product/:id", async (req, res) => {
  try {
    const product = await ProductsModel.findByIdAndRemove(req.params.id);
    res.status(200).json(product);
    return;
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
        return;

    }

});



//get product by category

router.get("/product/category/:category", async (req, res) => {
  try {
    const product = await ProductsModel.find({ category: req.params.category });
    res.status(200).json(product);
    return;
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
        return;

    }
});

//get product by name

router.get("/product/name/:name", async (req, res) => {
  try {
    const product = await ProductsModel.find({ name: req.params.name });
    res.status(200).json(product);
    return;
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
        return;

    }
});




// get product by price

router.get("/product/price/:price", async (req, res) => {
  try {
    const product = await ProductsModel.find({ price: req.params.price });
    res.status(200).json(product);
    return;
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
        return;

    }
});










module.exports = router;
