// const http = require('https');

// //Crear el servidor
// http.createServer((req, res) => {
//     res.status = 200;
//     res.setHeader('Content-Type','text/plain');
// });

//Llamar a express
const express = require('express');
const app = express();
const path = require('path'),
port = process.env.PORT || 5500; // Si está definido en el entorno, usarlo. Si no, el 3000

// Configuraciones
app.set('port', port);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine','ejs');
// Middleware

//routes
app.use(require('./routes/index'));

// static files
app.use(express.static(__dirname + '/public'));

// Escuchando al servidor
app.listen(app.get('port'), () => {
    console.log('Server on port', port);
});
