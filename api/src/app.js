const express = require("express");
const path = require("path");

const app = express();

// ROUTES
const routes = require("./routes/index.routes");
app.use(routes);

app.listen(3001, () => {
  console.log("Servidor a la espera de conecciones");
});
