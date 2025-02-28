//todos los HTML 
const { products } = require('../models/Products'); 

function productForm() {
    
    return `
        <form action="/dashboard" method="POST" id="createProductForm" class="form-container">
        <div class="product">  
        <label for="nombre">Nombre del producto:</label>
        <input type="text" id="nombre" name="nombre" required>
        <label for="description">Descripción:</label>
        <textarea id="description" name="descripcion" required></textarea>
        
        <label for="price">Precio:</label>
        <input type="number" id="price" name="precio" step="0.01" required>

        <label for="categoria">Categorías:</label>
                <select id="categoria" name="categoria">
                <option value="Miniaturas" >Miniatura</option>
                <option value="Pinturas" >Pintura</option>
                <option value="Transporte" >Transporte</option>
                <option value="Accesorios" >Accesorio</option>
            </select>
        
        <label for="image">Imagen:</label>
        <input type="file" id="image" name="imagen" accept="image/*" required>
        
        <button type="submit" class="crear-button">Crear Producto</button>
        </div>
        </form>
        <script>
        document.getElementById("createProductForm").addEventListener("submit", async function(event) {
        event.preventDefault();

        const formData = new FormData(this);
        const file = formData.get("imagen");

        if (file && file.size > 0) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async function () {
            formData.set("imagen", reader.result); 

            const response = await fetch("/dashboard", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(Object.fromEntries(formData))
            });

            if (response.ok) {
                window.location.href = "/dashboard";
            } else {
                alert("Error al crear el producto.");
            }
        };
        } else {
        alert("Debes subir una imagen.");
        }
        });
        </script>`;   
};

function getProduct(products) {
let html = '';

    for (let product of products) {
        html += `
            <div class="product">
                <h2>${product.nombre}</h2>
                <a href="/products/${product._id}">Ver detalle</a>
            </div>
        `;
    }

    return html;
    };
    function productId(product) {
        return `
            <div class="product">
              <div class="imagen">
                <img class="imagenProducto" src="${product.imagen}" width="200"> <br/>
              </div>
              <div class="infoProduct">
                    <h2>${product.nombre}</h2>
                    <p>${product.descripcion}</p>
                    <p><strong>Precio:</strong> ${product.precio}€</p>
                    <p><strong>Categoría:</strong> ${product.categoria}</p>
                  <div class="botones">
                    <button class="edit-btn" onclick="window.location.href = '/dashboard/${product._id}/edit'">EDITAR</button>
                    <button class="delete-btn" data-product-id="${product._id}">ELIMINAR</button>
                  </div>
              </div>
            </div>
            <script>
            document.addEventListener("click", async function (event) {
                if (event.target.classList.contains("delete-btn")) {
                    const productId = event.target.getAttribute("data-product-id");
                    if (confirm("¿Estás seguro de eliminar este producto?")) {
                        const response = await fetch(\`/dashboard/\${productId}/delete\`, { method: "DELETE" });
                        if (response.ok) {
                            // Redirige inmediatamente al dashboard para evitar intentar acceder al producto eliminado
                            window.location.href = "/dashboard"; 
                        } else {
                            alert("Error al eliminar el producto.");
                        }
                    }
                }
            });
            </script>
        `;
    }
    function editProduct(product) {
        return `
        <form action="/dashboard/${product._id}" method="POST" id="form-container">  
        <div class="product">
        <label for="nombre">Nombre del producto:</label>
        <input type="text" id="nombre" name="nombre" value='${product.nombre}' required>
        
        <label for="description">Descripción:</label>
        <textarea id="description" name="descripcion" required>${product.descripcion}</textarea>
        
        <label for="price">Precio:</label>
        <input type="number" id="price" name="precio" step="0.01" value='${product.precio}' required>

        <label for="categoria">Categorías:</label>
        <select id="categoria" name="categoria">
            <option value="Miniaturas" ${product.categoria === "Miniaturas" ? "selected" : ""}>Miniatura</option>
            <option value="Pinturas" ${product.categoria === "Pinturas" ? "selected" : ""}>Pintura</option>
            <option value="Transporte" ${product.categoria === "Transporte" ? "selected" : ""}>Transporte</option>
            <option value="Accesorios" ${product.categoria === "Accesorios" ? "selected" : ""}>Accesorio</option>
        </select>

        
        <label for="image">Imagen actual:</label>
        <img src="${product.imagen}" alt="Imagen del producto" width="100">
        <label for="image">Actualizar imagen:</label>
        <input type="file" id="image" name="imagen" accept="image/*">

        
        <button class="botonInicio" type="submit">ACTUALIZAR</button> 
        </div>
        </form>
    `;
    };
    function homePage() {
        return `
        <div class="introduccion">
        <section style="text-align: center; padding: 50px;">
            <h1>¡Bienvenidos a BLACK CRUSADE!</h1>
            <p class="parrafo-inicio">Bienvenido a BLACK CRUSADE, tu tienda online especializada en el apasionante universo WARHAMMER.<br> 
            Ofrecemos una amplia gama de productos para satisfacer las necesidades de coleccionistas y jugadores, desde miniaturas detalladas hasta pinturas de alta calidad, 
            accesiorios indispensables y maletines de transporte.<br> Nuestro objetivo es proporcionarte todo lo necesario para que disfruters al máximo de tu hobby, 
            ya sea que estés iniciándote en el mundo de WARHAMMER o busques expandir tu ejército con las últimas novedades en batallones y regimientos.<br> 
            Explora nuestras categorías y descubre productos seleccionados para ayudarte a crear, personalizar y transportar tus miniaturas con facilidad y estilo.<br>
            ¡Embárcate en tu próxima cruzada con nosotros y lleva tus batallas al siguiente nivel!</p>
            <div class="categoriasInicio">
                <a href="/category/Miniaturas" style="margin-right: 15px;">🖌 Miniaturas</a>
                <a href="/category/Pinturas" style="margin-right: 15px;">🎨 Pinturas</a>
                <a href="/category/Accesorios" style="margin-right: 15px;">🔧 Accesorios</a>
                <a href="/category/Transporte">🚚 Transporte</a>
            </div>
        </section>
        </div>
        `
    }


module.exports = { getProduct, productForm, productId, editProduct, homePage };