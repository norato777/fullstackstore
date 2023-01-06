const mongoose = require("mongoose");
require("dotenv").config();

const URI = process.env.MONGODB_URI;

// const password = "holapepe";
// const dbname = "Ecommerce"
// const uri = `mongodb+srv://newStore:${password}@cluster0.phfwwtv.mongodb.net/${dbname}?retryWrites=true&w=majority`

mongoose.set("strictQuery", false);
mongoose
  .connect(URI, {})
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

// main().catch(err => console.log(err));
// async function main() {
// await mongoose.connect(`mongodb://leo:${password}@127.0.0.1:27017/test`);
