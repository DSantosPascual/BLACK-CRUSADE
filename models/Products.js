//Configuramos el Schema de los atributos de nuestros productos
const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    nombre: {type: String, required: true},   
    descripcion: String,
    categoria: { type: String, enum: ['Miniaturas', 'Pinturas', 'Transporte', 'Accesorios'] },
    imagen: { type: String }, 
    precio: Number
}, { timestamps: true });


const Products = mongoose.model('Products', ProductSchema ) 

module.exports = Products;