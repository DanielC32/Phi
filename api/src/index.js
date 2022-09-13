const express = require("express");
const parser = require('body-parser');
const app = express();
const port = 4000;
const datoRoutes = require("./routes/dato");
const mongoose = require("mongoose");
const { application } = require("express");
require('dotenv').config();
var cors = require('cors');

       
app.use(cors())
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

app.use(datoRoutes);
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conexion exitosa"))
  .catch((error) => console.log(error));

console.clear();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});