const express = require("express");
const router = express.Router();
const datoSchema = require("../models/dato");

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
