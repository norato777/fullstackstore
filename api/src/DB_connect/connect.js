const mongoose = require("mongoose")

const password = "holapepe";
const dbname = "Ecommerce"
const uri = `mongodb+srv://newStore:${password}@cluster0.phfwwtv.mongodb.net/${dbname}?retryWrites=true&w=majority`

const connection =()=>{
    mongoose.set('strictQuery', true);
    mongoose.connect(uri,)
}


    
    

module.exports = connection

