// docs/basicInfo.js
module.exports = {
    openapi: '3.0.0',
    info: {
      title: 'API de Productos',
      version: '1.0.0',
      description: 'API para gestionar productos',
    },
    servers: [
      {
        url: 'http://localhost:3000', 
        description: 'Servidor local',
      },
    ],
  };