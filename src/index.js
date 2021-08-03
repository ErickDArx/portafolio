// Llamar a express y crear el servidor
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
mongoose.connect('mongodb+srv://renji:brunoalonso2706@cluster0.drhdg.mongodb.net/portafolio?retryWrites=true&w=majority')
.then(db => console.log('Todo bien'))
.catch(err =>console.log(err));
const path = require('path');
const port = process.env.PORT || 5500; // Si está definido en el entorno, usarlo. Si no, el 3000

// Configuraciones
app.set('port', port);
app.set('views', path.join(__dirname, 'views'));
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
