// swagger.js
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
        url: 'http://localhost:8000/api',
        description: 'Servidor local',
      },
    ],
  },
  apis: ['./routes/apiRoutes.js'], // Ruta a tus archivos de rutas
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};