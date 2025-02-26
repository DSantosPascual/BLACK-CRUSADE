//Creamos todos los ENDPOINTS 
const express = require('express');
const ProductControllers = require('../controllers/productController');
const router = express.Router();
const Products = require('../models/Products');


router.get('/', ProductControllers.getAllProducts);
router.post('/create', ProductControllers.create); 
router.get('/', ProductControllers.getProductById);
router.delete('/id/:_id', ProductControllers.deleteProduct);
router.get('/dashboard', ProductControllers.showProducts);
router.get('/dashboard/new', ProductControllers.showProductNew);
router.post('/dashboard', ProductControllers.createProduct);
router.get('/products/:productId', ProductControllers.showProductById);
router.delete('/dashboard/:productId/delete', ProductControllers.deleteProductById);
router.get('/dashboard/:productId/edit', ProductControllers.showEditProduct);
router.post('/dashboard/:productId', ProductControllers.updateProduct);




module.exports = router;


/*
router.get('/', productController.showProducts);
router.get('/:productId', productController.showProductById);

router.post('/dashboard', productController.createProduct);

router.put('/dashboard/:productId', productController.updateProduct);
router.delete('/dashboard/:productId/delete', productController.deleteProduct);
*/