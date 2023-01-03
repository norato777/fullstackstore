const mongoose = require("mongoose")
const { Schema } = mongoose

const ProductsSchema = new Schema({
    name:String,
    image:String,
    detail:String,
    price:Number,
    number:Number,
    coments:Array,
    category:Array    
})
// const UsersSchema = new Schema({
//     email:String,
//     password:String,
//     username:String
// })


const ProductsModel = mongoose.model("products", ProductsSchema)
// const UsersModels = mongoose.model("users", UsersSchema)


module.exports = ProductsModel

