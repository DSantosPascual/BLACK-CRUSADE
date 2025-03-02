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
        url: 'http://localhost:3000/api', // Usa el puerto de tu aplicación principal
        description: 'Servidor local',
      },
    ],
  },
  apis: ['./routes/apiRoutes.js'], // Ruta a tus archivos de rutas
};

const specs = swaggerJsdoc(options);

// Crea un servidor Express separado para Swagger
const swaggerApp = express();

// Configura Swagger UI
swaggerApp.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Inicia el servidor de Swagger en un puerto diferente
const SWAGGER_PORT = 8000;
swaggerApp.listen(SWAGGER_PORT, () => {
  console.log(`Swagger UI está corriendo en http://localhost:${SWAGGER_PORT}/api-docs`);
});