const express = require('express');
const router = express.Router();

//Llamar al modelo
const tech = require('../models/tech');

// Routes GET / POST / PUT / DELETE

router.get('/', async (req, res) => {
    const Tech = await tech.find();
    res.json(Tech);
});

router.get('/details', async (req, res) => {
    res.render('details.html');
});

router.post('/', async (req, res) =>{
    const save = new Tech(req.body);
    await save.save();
    res.json({
        status: 'Elemento guardado'
    });
});

router.put('/:id', async (req, res) =>{
    await tech.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'Elemento actualizado'
    });
});

router.delete('/:id', async (req, res) =>{
    await tech.findByIdAndRemove(req.params.id, req.body);
    res.json({
        status: 'Elemento depurado'
    });
});

// Exportar las rutas
module.exports = router;