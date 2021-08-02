const express = require('express');
const app = express();
const path = require('path'),
puerto = process.env.PORT || 5500; // Si está definido en el entorno, usarlo. Si no, el 3000


// Configuraciones
app.set('port', puerto);
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
    console.log('Server on port', puerto);
});
