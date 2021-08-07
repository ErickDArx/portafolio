const express = require('express');
const router = express.Router();

//Llamar al modelo
const Tech = require('../models/Tech');

// Routes GET / POST / PUT / DELETE

router.get('/', async (req, res) => {
    const Tech = await tech.find();
    res.json(Tech);
});

router.get('/details', async (req, res) => {
    res.render('details.html');
});

router.post('/api/details', async (req, res) =>{

    const tech = new Tech(req.body);
    console.log(tech);
    await tech.save();
    res.json({
        status: 'Elemento guardado'
    });

});

router.put('/details:id', async (req, res) =>{
    await tech.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'Elemento actualizado'
    });
});

router.delete('/details:id', async (req, res) =>{
    await tech.findByIdAndRemove(req.params.id, req.body);
    res.json({
        status: 'Elemento depurado'
    });
});

// Exportar las rutas
module.exports = router;