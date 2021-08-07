const express = require('express');
const router = express.Router();

//Llamar al modelo
const Tech = require('../models/Tech');

// Routes GET / POST / PUT / DELETE

router.get('/', async (req, res) => {
    res.render('index.html');
});

router.get('/details', async (req, res) => {
    res.render('details.html');
});

router.get('/api/details', async (req, res) => {
    const tech = await Tech.find();
    res.json(tech);
});

router.post('/api/details', async (req, res) =>{

    const tech = new Tech(req.body);
    console.log(tech);
    await tech.save();
    res.json({
        status: 'Elemento guardado'
    });

});


router.get('/api/details/:id', async (req, res) => {
    const tech = await Tech.findById(req.params.id);
    res.json(tech);
});

router.put('/api/details/:id', async (req, res) =>{
    await Tech.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'Elemento actualizado'
    });
});

router.delete('/api/details/:id', async (req, res) =>{
    await Tech.findByIdAndRemove(req.params.id, req.body);
    res.json({
        status: 'Elemento depurado'
    });
});

// Exportar las rutas
module.exports = router;