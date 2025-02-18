//Creamos todos los ENDPOINTS 
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.send('Pagina funcionando')
})







module.exports = router;