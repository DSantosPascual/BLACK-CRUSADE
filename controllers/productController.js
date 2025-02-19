//Creamos el CRUD
const Product = require('../models/Products');
const getProductCards = require('./html');

const ProductControllers = {
    
    async create (req, res) {
        try {
            const product = await Product.create(req.body);
            res.status(201).json({ Mensaje: "Producto creado correctamente", product });
        } catch (error) {
            console.error(error)
            res.status(500).send({ Mensaje: "No se ha podido crear el producto"});
        }
    },
    /*async getAllProducts (req, res) {
        try {
            const products = await Product.find();
            res.status(200).json({ Mensaje: "Todos los productos", products });
        } catch (error) {
            console.error('Error al obterner todos los productos', error);
        }
        
    },*/
    async showProducts (req, res) {
    const products = await Product.find();
    const productCards = getProductCards(products);
    const html = productCards;
    res.send(html);
    },
    async getProductById (req, res) {
        try {
            const productId = await Product.findById(req.params._id);
            res.status(200).json({ Mensaje: 'Producto encontrado', productId});
        } catch (error) {
            console.error('Error al encontrar el producto', error);
        }
    },
    async deleteProduct (req, res) {
        try {
            const productId = await Product.findByIdAndDelete(req.params._id)
            res.status(200).json({ Mensaje: 'Producto eliminado', productId});
        } catch (error) {
            console.error('Error al eliminar el producto', error);
        }
    }
}

module.exports = ProductControllers;