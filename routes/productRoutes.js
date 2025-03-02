//Creamos todos los ENDPOINTS 
const express = require('express');
const ProductControllers = require('../controllers/productController');
const router = express.Router();
const checkAuth = require('../middlewares/authMiddleware');

router.get('/products', ProductControllers.showProducts);
router.get('/category/:category', ProductControllers.showCategory);
router.get('/products/:productId', ProductControllers.showProductById);
router.get('/inicio', ProductControllers.showHome);

// Rutas protegidas (requieren autenticación)
router.get('/dashboard', checkAuth, ProductControllers.showProducts);
router.get('/dashboard/new', checkAuth, ProductControllers.showProductNew);
router.post('/dashboard', checkAuth, ProductControllers.createProduct);
router.get('/dashboard/:productId/edit', checkAuth, ProductControllers.showEditProduct);
router.get('/dashboard/:productId', checkAuth, ProductControllers.showProductById);
router.post('/dashboard/:productId', checkAuth, ProductControllers.updateProduct);
router.delete('/dashboard/:productId/delete', checkAuth, ProductControllers.deleteProductById);


module.exports = router;