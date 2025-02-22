//todos los HTML 
const { products } = require('../models/Products'); 

function productForm() {
    
    return `
        <form action="/dashboard" method="POST" id="createProductForm">  
        <label for="nombre">Nombre del producto:</label>
        <input type="text" id="nombre" name="nombre" required>
        
        <label for="description">Descripción:</label>
        <textarea id="description" name="descripcion" required></textarea>
        
        <label for="price">Precio:</label>
        <input type="number" id="price" name="precio" step="0.01" required>
        
        <label for="image">Imagen:</label>
        <input type="file" id="image" name="imagen" accept="image/*" required>
        
        <button type="submit">Crear Producto</button>
        </form>
        <script>
document.getElementById("createProductForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Evita la recarga de la página

    const formData = new FormData(this);
    const file = formData.get("imagen");

    if (file && file.size > 0) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async function () {
            formData.set("imagen", reader.result); // Convertimos la imagen a Base64

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
</script>
    `;   
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
            <div class="product-detail">
                <h2>${product.nombre}</h2>
                <p>${product.descripcion}</p>
                <p>Precio: ${product.precio}€</p>
                <img src="${product.imagen}" width="200">
                <button class="edit-btn" onclick="window.location.href = '/dashboard/${product._id}/edit'">EDITAR</button>
                <button class="delete-btn" data-product-id="${product._id}">ELIMINAR</button>
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
        <form action="/dashboard/${product._id}" method="POST">  
        <label for="nombre">Nombre del producto:</label>
        <input type="text" id="nombre" name="nombre" value='${product.nombre}' required>
        
        <label for="description">Descripción:</label>
        <textarea id="description" name="descripcion" required></textarea>
        
        <label for="price">Precio:</label>
        <input type="number" id="price" name="precio" step="0.01" required>
        
        <label for="image">Imagen:</label>
        <input type="file" id="image" name="imagen" accept="image/*" required>
        
        <button type="submit">ACTUALIZAR</button>
        </form>
    `;
    };

module.exports = { getProduct, productForm, productId, editProduct };