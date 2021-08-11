"use strict";

// Llamar a express y crear el servidor
var express = require('express');

var app = express();

var routes = require('./routes/web');

var bodyParser = require('body-parser');

var morgan = require('morgan');

var cors = require('cors'); // Atraer las variables de entorno


require('dotenv').config(); // Conexion base de datos


var mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.DB_MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function (db) {
  return console.log('La conexion a la base de datos es correcta');
})["catch"](function (err) {
  return console.log(err);
});

var path = require('path'); // Conexion al servidor local


var port = process.env.PORT || 8080; // Si está definido en el entorno, usarlo. Si no, el 3000
// Configuraciones

app.set('port', port);
app.set('views', path.join(__dirname, 'views/'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs'); // Middlewares || Procesar acciones en las URL's

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors()); // Routes 

app.use('/', routes); // static files || Enviar archivos al Frontend

app.use(express["static"](path.join(__dirname, 'public'))); // Escuchando al servidor

app.listen(app.get('port'), function () {
  console.log('El Servidor se encuentra funcionado en este momento', port);
});