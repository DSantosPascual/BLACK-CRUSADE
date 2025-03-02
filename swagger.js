// config/swagger.js
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const specs = require('./docs/index'); 

const swaggerApp = express();

swaggerApp.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

const SWAGGER_PORT = 8000;
swaggerApp.listen(SWAGGER_PORT, () => {
  console.log(`Swagger UI está corriendo en http://localhost:${SWAGGER_PORT}/api-docs`);
});