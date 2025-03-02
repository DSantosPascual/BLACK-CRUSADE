const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Productos',
      version: '1.0.0',
      description: 'API para gestionar productos',
    },
    servers: [
      {
        url: 'http://localhost:3000/api', 
        description: 'Servidor local',
      },
    ],
  },
  apis: ['./routes/apiRoutes.js'],
};

const specs = swaggerJsdoc(options);

const swaggerApp = express();

swaggerApp.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

const SWAGGER_PORT = 8000;
swaggerApp.listen(SWAGGER_PORT, () => {
  console.log(`Swagger UI está corriendo en http://localhost:${SWAGGER_PORT}/api-docs`);
});