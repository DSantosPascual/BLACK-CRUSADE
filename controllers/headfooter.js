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
    <div id="background-container"></div>
    <header class="header"><h1><strong>BLACK CRUSADE</strong></h1></header>
    <div class="homeBtn">
        <button onclick="goToHome()">INICIO</button>
    </div>
    <script>
        function goToHome() {
            window.location.href = '/dashboard';
        }
    </script>
    <script src="/js/background.js"></script>
</body>
</html>
    `;
};

const footerTemplate = () => {
    return `
        <footer>
            <h3>2025</h3>
            <p>👨‍💻 Adrián Garrido Luengo 👨‍💻 Adrián Pajuelo Momboisse 👨‍💻 Dámaso Adrián Santos Pascual</p>
        </footer>
    `;
};

module.exports = {headerTemplate, footerTemplate};

