// docs/components.js
module.exports = {
    schemas: {
      Product: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            example: '12345',
          },
          nombre: {
            type: 'string',
            example: 'Producto de ejemplo',
          },
          descripcion: {
            type: 'string',
            example: 'Descripción del producto',
          },
          precio: {
            type: 'number',
            example: 99.99,
          },
          categoria: {
            type: 'string',
            example: 'Electrónica',
          },
        },
      },
    },
    responses: {
      NotFound: {
        description: 'Recurso no encontrado',
      },
      ServerError: {
        description: 'Error del servidor',
      },
    },
  };