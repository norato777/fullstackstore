
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose")
const PORT = process.env.PORT || 3001;
const userRoutes= require("./routes/users");
const produscRoutes= require("./routes/Products");
const app = express();

mongoose.set('strictQuery', true);
//midware
app.use(express.json());
app.use('/api', userRoutes,  produscRoutes)


//Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});



// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
