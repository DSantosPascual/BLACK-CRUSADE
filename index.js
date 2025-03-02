// Montamos el servidor de Express
const express = require('express');
const cors = require('cors');
const app = express();
const dbConnection = require('./config/config');
const path = require('path');
const admin = require('firebase-admin');
const serviceAccount = require('./config/firebase.json');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const swaggerUi = require('swagger-ui-express');
const specs = require('./docs/index'); 

const swaggerApp = express();

// Inicializa Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const PORT = 3000;

// Configura CORS
app.use(cors({
  origin: 'http://localhost:8000', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  credentials: true, 
}));

// Middlewares
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ limit: '5mb', extended: true }));

// Rutas
app.use('/', require('./routes/authRoutes'));
app.use('/', require('./routes/productRoutes')); 
swaggerApp.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Conecta a la base de datos
dbConnection();

// Inicia el servidor principal
app.listen(PORT, () => console.log(`Server funcionando en el Puerto ${PORT}`));

//Puerto Swagger
const SWAGGER_PORT = 8000;
swaggerApp.listen(SWAGGER_PORT, () => {
  console.log(`Swagger UI está corriendo en http://localhost:${SWAGGER_PORT}/api-docs`);
});

module.exports = app;


