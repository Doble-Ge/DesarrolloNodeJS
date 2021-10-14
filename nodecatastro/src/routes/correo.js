const express = require('express')
const app = express();

let envio = require('../controllers/correo.controller');

app.post('/', envio.envioCorreo);

module.exports = app;