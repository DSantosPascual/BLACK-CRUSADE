const express = require('express');
const ProductControllers = require('../controllers/productController.js');
const router = express.Router();
const UserController = require('../controllers/authController')
const checkAuth = require('../middlewares/authMiddleware');

router.get('/register', UserController.register);
router.post('/create', UserController.createUser);
router.get('/login', UserController.loginUser);
router.post('/login', UserController.logedUser);
router.get('/dashboard', checkAuth, ProductControllers.showProducts);
router.post('/logout', UserController.logout);

module.exports = router;