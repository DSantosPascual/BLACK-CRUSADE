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
app.use('/', require('./routes/authRoutes'));
app.use('/', require('./routes/productRoutes'));
app.use('/api', require('./routes/apiRoutes'));

// require('./swagger')(app);

dbConnection();

app.listen(PORT, () => console.log(`Server funcionando en el Puerto ${PORT}`));

module.exports = app;

/* npm install swagger-ui-express

// Montamos el servidor de Express
const express = require('express');
const app = express();
const dbConnection = require('./config/config');
const path = require('path');
const admin = require('firebase-admin');
const serviceAccount = require('./config/firebase.json');
const cookieParser = require('cookie-parser');
require('dotenv').config();

// Swagger
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');

// Cargar Swagger JSON
const swaggerFile = './docs/swagger.json';
const swaggerData = JSON.parse(fs.readFileSync(swaggerFile, 'utf-8'));

// Inicializar Firebase
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const PORT = 3000;

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ limit: '5mb', extended: true })); 

// Rutas de la API
app.use('/', require('./routes/authRoutes'));
app.use('/', require('./routes/productRoutes'));

// Ruta de documentación Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerData));

dbConnection();

app.listen(PORT, () => {
    console.log(`Server funcionando en el Puerto ${PORT}`);
    console.log(`Documentación Swagger disponible en http://localhost:${PORT}/api-docs`);
});

module.exports = app;


y prueba: node index.js
*/