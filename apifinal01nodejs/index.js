const express = require("express");
const parser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
require('dotenv').config();
var cors = require('cors');
const router = express.Router();
const datoSchema = require("./dato");

       
app.use(cors())
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

app.use(router);
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conexion exitosa"))
  .catch((error) => console.log(error));

console.clear();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

router.get("/", (req,res)=>{
  res.send("Holo");
});


///METODOS///

//Agregar un documento
router.post("/p", (req, res) => {
  const dato = datoSchema(req.body);
 dato
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Listar todos los documentos
router.get("/g", (req, res) => {
 datoSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Buscar por id
router.get("/dato/:id", (req, res) => {
  const { id } = req.params;
 datoSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Eliminar por id
router.delete("/dato/:id", (req, res) => {
  const { id } = req.params;
 datoSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
