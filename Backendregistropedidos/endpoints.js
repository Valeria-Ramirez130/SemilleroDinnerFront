const express = require('express')
const router = express.Router()
const funciones = require('./funciones.js')

router
  .post('/toma-de-pedidos', funciones.regisPedidos)
  .get('/listado-de-pedidos', funciones.getPedidos)



module.exports = router