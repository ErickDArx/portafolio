// Atraer las variables de entorno
require('dotenv').config();
// Llamar a express y crear el servidor
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(process.env.DB_MONGO)
.then(db => console.log('Todo bien'))
.catch(err =>console.log(err));
const path = require('path');
const port = process.env.PORT || 8080; // Si está definido en el entorno, usarlo. Si no, el 3000

// Configuraciones
app.set('port', port);
app.set('views', path.join(__dirname, 'public/views/'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// Middlewares || Procesar acciones en las URL's
app.use(morgan('dev'));
app.use(express.json());

// Routes 
app.use(require('./routes/web'));

// static files || Enviar archivos al Frontend
app.use(express.static(__dirname + '/public'));

// Escuchando al servidor
app.listen(app.get('port'), () => {
    console.log('Server on port', port);
});
