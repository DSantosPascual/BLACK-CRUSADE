const express = require('express');
const router = express.Router();
const path = require ('path');
const admin = require ('firebase-admin');
const auth = admin.auth();
const ProductControllers = require('../controllers/productController');
const checkAuth = require('../middlewares/authMiddleware');


router.get('/register', (req, res) =>{
    res.sendFile(path.join(__dirname, '../public/views', "register.html"));
});

router.post('/register', async (req, res) =>{
    const {email, password} = req.body;
    try {
        await auth.createUser({
            email,
            password
        })
        res.redirect('/login')
        
    } catch (error) {
        console.error(`error interno ${error}`);
        res.redirect('/register');
    }
});

router.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/views', "login.html"))
})

router.post("/login", async (req, res)=>{
    const {idToken} = req.body;
    
    try {
        
        res.cookie('token', idToken, {httpOnly: true, secure: false})
        res.json({success:true});
    } catch (error) {
        console.log(`ha dado un error ${error}`)
    }
})

// router.get('/dashboard', (req, res)=>{
//     res.sendFile(path.join(__dirname, '../public/views', 'dashboard.html'));
// })
// router.get('/dashboard', (req, res) =>{
//     res.redirect('/dashboard')
// });
router.get('/dashboard', checkAuth, ProductControllers.showProducts);


router.post('/logout', (req, res)=>{
    res.clearCookie('token')
    res.redirect('/login')
})

module.exports = router;