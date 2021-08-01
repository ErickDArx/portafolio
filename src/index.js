const express = require('express');
const app = express();
const path = require('path');

// Configuraciones
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'))
app.engine('html', require('ejs').renderFile);
app.set('view engine','ejs');

// Middleware

//routes
app.use(require('./routes/index'));

// static files

// Escuchando al servidor
app.listen(app.get('port'), () => {
    console.log('Server on port', 3000);
});