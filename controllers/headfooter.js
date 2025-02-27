const headerTemplate = () => {
    return `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/styles.css">
    <title>BLACK CRUSADE</title>
</head>

<body>
    <div id="background-container">
    <div id="contenido">
    <header class="header">
        <h1><strong>BLACK CRUSADE</strong></h1>
        <nav class="navbar">
            <ul>
                <li><a href="/dashboard">INICIO</a></li>
                <li><a href="/miniaturas">MINIATURAS</a></li>
                <li><a href="/pinturas">PINTURAS</a></li>
                <li><a href="/accesorios">ACCESORIOS</a></li>
                <li><a href="/transporte">TRANSPORTE</a></li>
                <li class="cart-icon">
                    <a href="/carrito">
                        <img class="cart-icon" src="/images/icons/carrito-de-compras.png" alt="Carrito" />
                    </a>
                </li>
                <li>
                    <form action="/logout" method="post">
                        <button class="logout-button" type="submit">Logout</button>
                    </form>
                </li>
            </ul>                                               
                
            <div>
        </nav>
    </header>
    
    <script src="/scripts/imagenesFondo.js"></script>
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

