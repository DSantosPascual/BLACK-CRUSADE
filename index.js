// Montamos el servidor de Express
const express = require('express');
const app = express();
const dbConnection = require('./config/config');
const path = require('path');
const admin = require('firebase-admin');
const serviceAccount = require('./config/firebase.json');
const cookieParser = require('cookie-parser');
require('dotenv').config();

// Inicializa Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const PORT = 3000;

// Middlewares
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ limit: '5mb', extended: true }));

// Rutas
app.use('/', require('./routes/authRoutes'));
app.use('/', require('./routes/productRoutes')); 

// Conecta a la base de datos
dbConnection();

// Inicia el servidor principal
app.listen(PORT, () => console.log(`Server funcionando en el Puerto ${PORT}`));

module.exports = app;
