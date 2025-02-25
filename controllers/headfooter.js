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
    <header class="header"><h1><strong>BLACK CRUSADE</strong></h1></header>
    <div class="botonInicio">
        <button class="botonInicio" onclick="irInicio()">INICIO</button>
    </div>
    <script src="/scripts/imagenesFondo.js"></script>
    <script>
        function irInicio() {
            window.location.href = '/dashboard';
        }
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

