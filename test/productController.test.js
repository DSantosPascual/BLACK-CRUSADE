// test/productController.test.js
const request = require('supertest');
const app = require('../index'); // Importar la aplicación Express desde index.js
const Product = require('../models/Products'); // Importar el modelo de Producto
const mongoose = require('mongoose'); // Importar mongoose

// Mockear el modelo de Producto
jest.mock('../models/Products');

describe('Product Controller', () => {
  // Limpiar los mocks después de cada test
  afterEach(() => {
    jest.clearAllMocks();
  });

  // Cerrar la conexión a la base de datos después de todas las pruebas
  afterAll(async () => {
    await mongoose.connection.close();
  });

  // Test para la función create
  describe('create', () => {
    it('should create a new product and return 201 status', async () => {
      const mockProduct = {
        _id: '123',
        nombre: 'Test Product',
        descripcion: 'Test Description',
        precio: 100,
        categoria: 'Test Category',
      };

      // Mockear la función create de Mongoose
      Product.create.mockResolvedValue(mockProduct);

      const response = await request(app)
        .post('/create')
        .send({
          nombre: 'Test Product',
          descripcion: 'Test Description',
          precio: 100,
          categoria: 'Test Category',
        });

      expect(response.status).toBe(201);
      expect(response.body).toEqual({
        Mensaje: 'Producto creado correctamente',
        product: mockProduct,
      });
    });

    it('should return 500 status if product creation fails', async () => {
      // Mockear un error en la función create de Mongoose
      Product.create.mockRejectedValue(new Error('Database error'));

      const response = await request(app)
        .post('/create')
        .send({
          nombre: 'Test Product',
          descripcion: 'Test Description',
          precio: 100,
          categoria: 'Test Category',
        });

      expect(response.status).toBe(500);
      expect(response.body).toEqual({
        Mensaje: 'No se ha podido crear el producto',
      });
    });
  });

  // Test para la función getAllProducts
  describe('getAllProducts', () => {
    it('should return all products with 200 status', async () => {
      const mockProducts = [
        { nombre: 'Product 1', precio: 100 },
        { nombre: 'Product 2', precio: 200 },
      ];

      // Mockear la función find de Mongoose
      Product.find.mockResolvedValue(mockProducts);

      const response = await request(app).get('/');

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        Mensaje: 'Todos los productos',
        products: mockProducts,
      });
    });

    it('should return 500 status if fetching products fails', async () => {
      // Mockear un error en la función find de Mongoose
      Product.find.mockRejectedValue(new Error('Database error'));

      const response = await request(app).get('/');

      expect(response.status).toBe(500);
    }, 15000); // Aumentar el timeout a 15 segundos
  });

  // Test para la función showProductById
  describe('showProductById', () => {
    it('should return a product by ID with 200 status', async () => {
      const mockProduct = {
        _id: '123',
        nombre: 'Test Product',
        descripcion: 'Test Description',
        precio: 100,
        categoria: 'Test Category',
        imagen: '/images/test.jpg', // Asegúrate de incluir la imagen
      };

      // Mockear la función findById de Mongoose
      Product.findById.mockResolvedValue(mockProduct);

      const response = await request(app).get('/products/123');

      expect(response.status).toBe(200);
      expect(response.text).toContain('Test Product'); // Verificar que el HTML contiene el nombre del producto
    });

    it('should return 404 status if product is not found', async () => {
      // Mockear que no se encuentra el producto
      Product.findById.mockResolvedValue(null);

      const response = await request(app).get('/products/123');

      expect(response.status).toBe(404);
    }, 15000); // Aumentar el timeout a 15 segundos
  });

  // Test para la función deleteProductById
  describe('deleteProductById', () => {
    it('should delete a product and return 200 status', async () => {
      const mockProduct = {
        _id: '123',
        nombre: 'Test Product',
      };

      // Mockear la función findByIdAndDelete de Mongoose
      Product.findByIdAndDelete.mockResolvedValue(mockProduct);

      const response = await request(app).delete('/dashboard/123/delete');

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        success: true,
        message: 'Producto eliminado correctamente',
      });
    });

    it('should return 404 status if product is not found', async () => {
      // Mockear que no se encuentra el producto
      Product.findByIdAndDelete.mockResolvedValue(null);

      const response = await request(app).delete('/dashboard/123/delete');

      expect(response.status).toBe(404);
    });
  });
});