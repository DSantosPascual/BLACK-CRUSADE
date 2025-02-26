const express = require('express');
const router = express.Router();
const path = require ('path');
const admin = require ('firebase-admin');
const auth = admin.auth();


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

router.post('/logout', (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/views', 'logout.html'))
})

module.exports = router;