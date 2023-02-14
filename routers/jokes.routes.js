const express = require("express");
const { listarBromas, buscarBroma, crearBroma, actualizarBroma, eliminarBroma } = require("../controllers/jokes.controller");
const app = express();
const Broma = require("../models/jokes.model");

app.get("/api/jokes/", listarBromas);
app.get("/api/jokes/search/:id", buscarBroma);
app.post("/api/jokes/new", crearBroma);
app.put("/api/jokes/update/:id", actualizarBroma);
app.delete("/api/jokes/delete/:id", eliminarBroma);

module.exports = app;