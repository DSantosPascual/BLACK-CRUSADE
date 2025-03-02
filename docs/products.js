// docs/products.js
module.exports = {
    paths: {
      '/products': {
        get: {
          summary: 'Obtener todos los productos',
          responses: {
            200: {
              description: 'Lista de productos',
            },
          },
        },
        post: {
          summary: 'Crear un nuevo producto',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Product',
                },
              },
            },
          },
          responses: {
            201: {
              description: 'Producto creado correctamente',
            },
            500: {
              $ref: '#/components/responses/ServerError',
            },
          },
        },
      },
      '/products/{id}': {
        get: {
          summary: 'Obtener un producto por ID',
          parameters: [
            {
              in: 'path',
              name: 'nombre',
              required: true,
              schema: {
                type: 'string',
              },
            },
          ],
          responses: {
            200: {
              description: 'Producto encontrado',
            },
            404: {
              $ref: '#/components/responses/NotFound',
            },
          },
        },
        put: {
          summary: 'Actualizar un producto',
          parameters: [
            {
              in: 'path',
              name: 'id',
              required: true,
              schema: {
                type: 'string',
              },
            },
          ],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Product',
                },
              },
            },
          },
          responses: {
            200: {
              description: 'Producto actualizado correctamente',
            },
            500: {
              $ref: '#/components/responses/ServerError',
            },
          },
        },
        delete: {
          summary: 'Eliminar un producto',
          parameters: [
            {
              in: 'path',
              name: 'id',
              required: true,
              schema: {
                type: 'string',
              },
            },
          ],
          responses: {
            200: {
              description: 'Producto eliminado correctamente',
            },
            404: {
              $ref: '#/components/responses/NotFound',
            },
          },
        },
      },
    },
  };