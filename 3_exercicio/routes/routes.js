//@ Importa as bibliotecas e arquivos
const express = require("express");
const routerApp = express.Router();
const app = require("../controller/ctlcalculadora");

//@ Configura as rotas
routerApp.post("/calcular", app.calculadora);

//@ Exporta a variável com as rotas
module.exports = routerApp;
