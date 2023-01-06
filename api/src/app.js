const express = require("express");

const app = express();

app.use(express.json());

//ROUTES
const routes = require("./routes/index.routes");
app.use(routes);

module.exports = app;
