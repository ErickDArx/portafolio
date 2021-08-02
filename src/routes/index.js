const express = require('express');
const router = express.Router();

// Routes
router.get('/', (req, res) => {
    res.render('index.html');
});

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

module.exports = router;