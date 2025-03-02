// // docs/productRoutesSwagger.js
// module.exports = {
//     /**
//      * @swagger
//      * /products:
//      *   get:
//      *     summary: Obtener todos los productos
//      *     responses:
//      *       200:
//      *         description: Lista de productos
//      */
//     '/': {
//       get: {
//         summary: 'Obtener todos los productos',
//         responses: {
//           200: { description: 'Lista de productos' },
//         },
//       },
//     },
  
//     /**
//      * @swagger
//      * /products/{id}:
//      *   get:
//      *     summary: Obtener un producto por ID
//      *     parameters:
//      *       - in: path
//      *         name: id
//      *         required: true
//      *         schema:
//      *           type: string
//      *     responses:
//      *       200:
//      *         description: Producto encontrado
//      *       404:
//      *         description: Producto no encontrado
//      */
//     '/products/{_id}': {
//       get: {
//         summary: 'Obtener un producto por ID',
//         parameters: [
//           {
//             in: 'path',
//             name: 'id',
//             required: true,
//             schema: { type: 'string' },
//           },
//         ],
//         responses: {
//           200: { description: 'Producto encontrado' },
//           404: { description: 'Producto no encontrado' },
//         },
//       },
//     },
  
//     /**
//      * @swagger
//      * /products:
//      *   post:
//      *     summary: Crear un nuevo producto
//      *     requestBody:
//      *       required: true
//      *       content:
//      *         application/json:
//      *           schema:
//      *             $ref: '#/components/schemas/Product'
//      *     responses:
//      *       201:
//      *         description: Producto creado correctamente
//      *       500:
//      *         description: Error del servidor
//      */
//     '/products': {
//       post: {
//         summary: 'Crear un nuevo producto',
//         requestBody: {
//           required: true,
//           content: {
//             'application/json': {
//               schema: { $ref: '#/components/schemas/Product' },
//             },
//           },
//         },
//         responses: {
//           201: { description: 'Producto creado correctamente' },
//           500: { description: 'Error del servidor' },
//         },
//       },
//     },
  
//     /**
//      * @swagger
//      * /products/{id}:
//      *   put:
//      *     summary: Actualizar un producto
//      *     parameters:
//      *       - in: path
//      *         name: id
//      *         required: true
//      *         schema:
//      *           type: string
//      *     requestBody:
//      *       required: true
//      *       content:
//      *         application/json:
//      *           schema:
//      *             $ref: '#/components/schemas/Product'
//      *     responses:
//      *       200:
//      *         description: Producto actualizado correctamente
//      *       500:
//      *         description: Error del servidor
//      */
//     '/products/{id}': {
//       put: {
//         summary: 'Actualizar un producto',
//         parameters: [
//           {
//             in: 'path',
//             name: 'id',
//             required: true,
//             schema: { type: 'string' },
//           },
//         ],
//         requestBody: {
//           required: true,
//           content: {
//             'application/json': {
//               schema: { $ref: '#/components/schemas/Product' },
//             },
//           },
//         },
//         responses: {
//           200: { description: 'Producto actualizado correctamente' },
//           500: { description: 'Error del servidor' },
//         },
//       },
//     },
  
//     /**
//      * @swagger
//      * /products/{id}:
//      *   delete:
//      *     summary: Eliminar un producto
//      *     parameters:
//      *       - in: path
//      *         name: id
//      *         required: true
//      *         schema:
//      *           type: string
//      *     responses:
//      *       200:
//      *         description: Producto eliminado correctamente
//      *       404:
//      *         description: Producto no encontrado
//      */
//     '/products/{id}': {
//       delete: {
//         summary: 'Eliminar un producto',
//         parameters: [
//           {
//             in: 'path',
//             name: 'id',
//             required: true,
//             schema: { type: 'string' },
//           },
//         ],
//         responses: {
//           200: { description: 'Producto eliminado correctamente' },
//           404: { description: 'Producto no encontrado' },
//         },
//       },
//     },
//   };