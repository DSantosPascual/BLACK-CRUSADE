//Montamos el servidor de Express
const express = require('express');
const app = express();
const dbConnection = require('./config/config');
//const router = require('../routes/productRoutes');
const path = require('path');
const admin = require('firebase-admin');
const serviceAccount = require ('./config/firebase.json');
const cookieParser = require('cookie-parser');
// const serviceAccount = require ('./config/firebase')
require('dotenv').config();

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const PORT = 3000;

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ limit: '5mb', extended: true })); 
app.use('/', require('./routes/viewRoutes'));
app.use('/', require('./routes/productRoutes'));

dbConnection();

app.listen(PORT, () => console.log(`Server funcionando en el Puerto ${PORT}`));

module.exports = app;
