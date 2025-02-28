//Creamos todos los ENDPOINTS 
const express = require('express');
const ProductControllers = require('../controllers/productController');
const router = express.Router();
const checkAuth = require('../middlewares/authMiddleware');

// const Products = require('../models/Products');


router.get('/', ProductControllers.showProducts);
router.post('/create', ProductControllers.create); 
router.get('/', ProductControllers.getProductById);
router.delete('/id/:_id', ProductControllers.deleteProduct);
router.get('/dashboard', checkAuth, ProductControllers.showProducts);
router.get('/dashboard/new',checkAuth, ProductControllers.showProductNew);
router.post('/dashboard', checkAuth, ProductControllers.createProduct);
router.get('/products/:productId', ProductControllers.showProductById);
router.delete('/dashboard/:productId/delete', checkAuth, ProductControllers.deleteProductById);
router.get('/dashboard/:productId/edit', checkAuth, ProductControllers.showEditProduct);
router.post('/dashboard/:productId', ProductControllers.updateProduct);
router.get('/inicio', ProductControllers.showHome);
router.get('/category/:category', ProductControllers.showCategory);






module.exports = router;

// router.get('/home', ProductControllers.showHome);
/*
router.get('/', productController.showProducts);
router.get('/:productId', productController.showProductById);

router.post('/dashboard', productController.createProduct);

router.put('/dashboard/:productId', productController.updateProduct);
router.delete('/dashboard/:productId/delete', productController.deleteProduct);
*/