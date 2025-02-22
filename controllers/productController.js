//Creamos el CRUD
const Product = require('../models/Products');
const {getProduct, productForm, productId, editProduct } = require('./html');
const fs = require('fs');
const path = require('path');

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
    async showProductNew (req, res) {
        const form = productForm();
        res.send(form);
        }, 
    async showProducts (req, res) {
        const products = await Product.find();
        const allProducts = getProduct(products);
        const html = allProducts;
        res.send(html);
    },
    /*async createProduct  (req, res)  {
        const product = await Product.create({...req.body})
        res.redirect('/dashboard');
    },*/
    async createProduct(req, res) {
        try {
            const { nombre, descripcion, precio, imagen } = req.body;
    
            let imagePath = ""; // Variable donde se guardará la ruta de la imagen
    
            if (imagen?.startsWith("data:image")) {
                try {
                    // Extraer la extensión de la imagen (ej: jpg, png)
                    const match = imagen.match(/^data:image\/(\w+);base64,/);
                    const ext = match ? match[1] : "png"; // Si no encuentra extensión, usa PNG por defecto
    
                    // Obtener los datos en Base64
                    const base64Data = imagen.replace(/^data:image\/\w+;base64,/, "");
    
                    // Definir nombre del archivo con la fecha actual
                    const fileName = `${Date.now()}.${ext}`;
                    const filePath = path.resolve(__dirname, "../public/images", fileName);
    
                    // Guardar la imagen en el servidor
                    fs.writeFileSync(filePath, Buffer.from(base64Data, "base64"));
    
                    // Ruta accesible de la imagen
                    imagePath = `/images/${fileName}`;
                } catch (error) {
                    console.error("Error guardando la imagen:", error);
                }
            }
    
            // Crear el producto en la base de datos
            const newProduct = new Product({
                nombre,
                descripcion,
                precio,
                imagen: imagePath // Guardar la ruta de la imagen
            });
    
            await newProduct.save();
            res.redirect("/dashboard");
        } catch (error) {
            console.error(error);
            res.status(500).send("Error al crear el producto");
        }
    },
    async showProductById (req, res) {
        const product = await Product.findById(req.params.productId);
        const html = productId(product);
        res.send(html);
        },
    async showEditProduct (req, res) {
        const product = await Product.findById(req.params.productId)
        const html = editProduct(product)
        res.send(html)
        },
    async updateProduct (req, res) {
        const {productId} = req.params;
        const { nombre, descripcion, precio } = req.body;
        const product = await Product.findByIdAndUpdate(productId, {nombre, descripcion, precio}, {new:true});
        res.redirect('/dashboard');
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
    },
    async deleteProductById(req, res) {
        try {
            const product = await Product.findByIdAndDelete(req.params.productId);
            if (!product) {
            return res.status(404).send("Producto no encontrado");
            }
            res.json({ success: true, redirect: "/dashboard" });
        } catch (error) {
            console.error(error);
            res.status(500).send("Error al eliminar el producto");
        }
    }
}

module.exports = ProductControllers;
