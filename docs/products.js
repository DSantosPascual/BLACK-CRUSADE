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
    },
    '/products/{productId}': {
      get: {
        summary: 'Obtener un producto por ID',
        parameters: [
          {
            in: 'path',
            name: 'productId',
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
    },
    '/dashboard': {
      get: {
        summary: 'Obtener productos del dashboard',
        responses: {
          200: {
            description: 'Lista de productos en el dashboard',
          },
        },
      },
      post: {
        summary: 'Crear un nuevo producto (requiere autenticación)',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ProductInput',
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
    '/dashboard/{productId}/edit': {
      get: {
        summary: 'Obtener página de edición de un producto',
        parameters: [
          {
            in: 'path',
            name: 'productId',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          200: {
            description: 'Página de edición de producto cargada',
          },
          404: {
            $ref: '#/components/responses/NotFound',
          },
        },
      },
    },
    '/dashboard/{productId}': {
      post: {
        summary: 'Actualizar un producto desde el dashboard (requiere autenticación)',
        parameters: [
          {
            in: 'path',
            name: 'productId',
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
            description: 'Producto actualizado correctamente desde el dashboard',
          },
          500: {
            $ref: '#/components/responses/ServerError',
          },
        },
        security: [
          {
            FirebaseAuth: [],
          },
        ],
      },
    },
    '/dashboard/{productId}/delete': {
      delete: {
        summary: 'Eliminar un producto desde el dashboard (requiere autenticación)',
        parameters: [
          {
            in: 'path',
            name: 'productId',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          200: {
            description: 'Producto eliminado correctamente desde el dashboard',
          },
          404: {
            $ref: '#/components/responses/NotFound',
          },
        },
        security: [
          {
            FirebaseAuth: [],
          },
        ],
      },
    },
  },
};
