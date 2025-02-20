//Creamos todos los ENDPOINTS 
const express = require('express');
const ProductControllers = require('../controllers/productController');
const router = express.Router();
const Products = require('../models/Products');

//router.get('/', ProductControllers.getAllProducts);
router.post('/create', ProductControllers.create); 
router.get('/', ProductControllers.getProductById);
router.delete('/id/:_id', ProductControllers.deleteProduct);
router.get('/products', ProductControllers.showProducts);
router.get('/products/new', ProductControllers.showProductNew);
router.post('/products/new', ProductControllers.create);
router.get('/products/:productId', ProductControllers.showProductById);



module.exports = router;
