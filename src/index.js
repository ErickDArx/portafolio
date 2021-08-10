// Llamar a express y crear el servidor
const express = require('express');

const app = express();
const routes = require('./routes/web');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

// Atraer las variables de entorno
require('dotenv').config();

// Conexion base de datos
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.DB_MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('La conexion a la base de datos es correcta'))
    .catch(err => console.log(err));

const path = require('path');

// Conexion al servidor local
const port = process.env.PORT || 8080; // Si está definido en el entorno, usarlo. Si no, el 3000

// Configuraciones
app.set('port', port);
app.set('views', path.join(__dirname, 'views/'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');// Middlewares || Procesar acciones en las URL's
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

// static files || Enviar archivos al Frontend
app.use(express.static(__dirname + '/public'));

// Routes 
app.use('/', routes);

// Escuchando al servidor
app.listen(app.get('port'), () => {
    console.log('El Servidor se encuentra funcionado en este momento', port);
});
