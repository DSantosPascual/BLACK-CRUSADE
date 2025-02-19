//todos los HTML 
const { products } = require('../models/Products'); 

function getProductCards(products) {
let html = '';
    for (let product of products) {
        html += `
        <div class="product-card">
        <h2>${product.nombre}</h2>
        <a href="/products/${product._id}">Ver detalle</a>
        </div>
        `;
    }
    return html;
    };



module.exports = getProductCards;