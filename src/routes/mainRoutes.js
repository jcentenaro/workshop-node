const express = require("express");
const router = express.Router();
//DEFINO QUÉ CONTROLADOR MANEJARÁ LAS FUNCIONES DE ESTE ROUTE
const controller = require("../controllers/mainController");

router.get("/", controller.index);

module.exports = router;