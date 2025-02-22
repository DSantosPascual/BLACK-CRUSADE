//Montamos el servidor de Express
const express = require('express');
const app = express();
const dbConnection = require('./config/config');
const router = require('./routes/productRoutes');
const path = require('path');

const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use('/', router);


dbConnection();

app.listen(PORT, () => console.log(`Server funcionando en el Puerto ${PORT}`));

module.exports = app;
