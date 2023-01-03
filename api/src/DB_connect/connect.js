const mongoose = require("mongoose")

const password = "holapepe";
const dbname = "Ecommerce"
const uri = `mongodb+srv://newStore:${password}@cluster0.phfwwtv.mongodb.net/${dbname}?retryWrites=true&w=majority`

const connection =()=>{
    mongoose.set('strictQuery', true);
    mongoose.connect(uri,)
}

// main().catch(err => console.log(err));
// async function main() {
    //   await mongoose.connect(`mongodb://leo:${password}@127.0.0.1:27017/test`);
    
    

module.exports = connection

