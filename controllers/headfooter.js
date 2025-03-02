const headerTemplate = () => {
    return `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Sigmar&display=swap" rel="stylesheet">
    <title>BLACK CRUSADE</title>
</head>

<body>
    <div id="background-container">
    <div id="contenido">
    <header class="header">
        <h1><strong><a class="enlace-titulo" href="/inicio">BLACK CRUSADE</strong></a></h1>
        <nav class="navbar">
            <ul>
                <li><a href="/inicio">INICIO</a></li>
                <li><a href="/products">TODOS LOS PRODUCTOS</a></li>
                <li><a href="/category/Miniaturas">MINIATURAS</a></li>
                <li><a href="/category/Pinturas">PINTURAS</a></li>
                <li><a href="/category/Accesorios">ACCESORIOS</a></li>
                <li><a href="/category/Transporte">TRANSPORTE</a></li>
                <li class="cart-icon">
                    <a href="/carrito">
                        <img class="cart-icon" src="/images/icons/carrito-de-compras.png" alt="Carrito" />
                    </a>
                </li>
                <li>
                     <form action="/dashboard/new" method="get">
                        <button class="newProduct-button" type="submit">Crear nuevo producto</button>
                     </form>
                </li>
                <li>
                    <a id="auth-button" href="/login">Login</a>
                </li>
            </ul>                                               
        </nav>
    </header>

    <script src="/scripts/imagenesFondo.js"></script>
    <script>
        window.onload = () => {
            fetch('/api/user')
                .then(res => res.json())
                .then(data => {
                    const authButton = document.getElementById('auth-button');
                    if (authButton) {
                        if (data.user) {
                            authButton.innerText = "Logout";
                            authButton.href = "/logout";
                        } else {
                            authButton.innerText = "Login";
                            authButton.href = "/login";
                        }
                    }
                })
                .catch(error => console.error('Error obteniendo el usuario:', error));
        };
    </script>
    `;
};


const footerTemplate = () => {
    return `
    </div>
    </div>
        <footer>
            <h3>2025</h3>
            <p>👨‍💻 Adrián Garrido Luengo 👨‍💻 Adrián Pajuelo Momboisse 👨‍💻 Dámaso Adrián Santos Pascual</p>
        </footer>
    </body>
    </html>
    `;
};

module.exports = {headerTemplate, footerTemplate};

