const express = require('express');
const app = express();
const path = require('path');

// Configuraciones
app.set('port', 5500);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));
// Middleware

//routes
app.use(require('./routes/index'));

// static files

// Escuchando al servidor
app.listen(app.get('port'), () => {
    console.log('Server on port', 3000);
});

// listening the Server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
  });