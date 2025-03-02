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
router.get('/logout', UserController.logout);
router.get('/api/user', checkAuth, (req, res) => {
    if (req.user) {
        res.json({ user: req.user });
    } else {
        res.json({ user: null });
    }
});

module.exports = router;
