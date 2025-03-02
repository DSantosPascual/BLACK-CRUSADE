jest.mock('../middlewares/authMiddleware', () => (req, res, next) => next());

const request = require('supertest');
const app = require('../index');
const Product = require('../models/Products')

jest.mock('../models/Products');

describe('Product Controller', () => {
    
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should create a product', async () => {
        const newProduct = {
            _id: 'mockProductId',
            nombre: 'Test Product',
            descripcion: 'A great product',
            precio: 100,
            categoria: 'Accesorios',
            imagen: 'data:image/png;base64,...'
        };
    
        Product.prototype.save = jest.fn().mockImplementation(function () {
            return Promise.resolve({
                _id: 'mockProductId',
                descripcion: this.descripcion,
                precio: this.precio,
                categoria: this.categoria,
                imagen: this.imagen
            });
        });
    
        const response = await request(app)
            .post('/dashboard')
            .set('Authorization', 'Bearer mock-token')
            .send(newProduct);
    
        console.log(response.body);
    
        expect(response.status).toBe(200);
        expect(response.body.redirectUrl).toMatch(/\/dashboard\/\w+\/edit/);
    });

    it('should return all products', async () => {
        const mockProducts = [
            { _id: '1', nombre: 'Product 1', descripcion: 'Desc 1', precio: 10, categoria: 'Miniaturas' },
            { _id: '2', nombre: 'Product 2', descripcion: 'Desc 2', precio: 20, categoria: 'Pinturas' }
        ];

        Product.find.mockResolvedValue(mockProducts);

        const response = await request(app).get('/products');

        expect(response.status).toBe(200);
        expect(response.text).toContain('Product 1');
        expect(response.text).toContain('Product 2');
    });

    it('should return a single product by ID', async () => {
        const mockProduct = { _id: '1', nombre: 'Test Product', descripcion: 'Test Desc', precio: 50 };

        Product.findById.mockResolvedValue(mockProduct);

        const response = await request(app).get('/products/1');

        expect(response.status).toBe(200);
        expect(response.text).toContain('Test Product');
    });
    it('should update a product', async () => {
            const updatedProduct = {
            nombre: 'Updated Product',
            descripcion: 'An updated product description',
            precio: 150,
            categoria: 'Accesorios',
        };
    
        Product.findByIdAndUpdate.mockResolvedValue({
            _id: '1',
            nombre: updatedProduct.nombre,
            descripcion: updatedProduct.descripcion,
            precio: updatedProduct.precio,
            categoria: updatedProduct.categoria,
        });
    
            const response = await request(app)
            .post('/dashboard/1')  
            .set('Authorization', 'Bearer mock-token')
            .send(updatedProduct);
    
        expect(response.status).toBe(302);

        expect(response.headers.location).toBe('/dashboard/1');
    });

    it('should delete a product', async () => {
        Product.findByIdAndDelete.mockResolvedValue({ _id: '1' });

        const response = await request(app).delete('/dashboard/1/delete');

        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
    });

});

