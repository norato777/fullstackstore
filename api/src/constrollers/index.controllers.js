const controllers = {}
const connection = require("../DB_connect/connect")
const ProductsModel = require("../models/Products")


controllers.index = async (req,res)=>{
    try {
        await connection()
        const allProducts = await ProductsModel.find()       
        console.log(allProducts)
        res.send(allProducts)
        
    } catch (error) {
        console.log(error)        
    }
}
module.exports = controllers

 