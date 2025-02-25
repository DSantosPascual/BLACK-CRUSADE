//Script para cambiar imágenes de fondo dinámicamente
document.addEventListener("DOMContentLoaded", () => {
    const fondos = [
        '/imagenesFondo/img1.jpg',
        '/imagenesFondo/img2.png',
        '/imagenesFondo/img3.png',
        '/imagenesFondo/img4.jpg'
    ];

    function cambiarFondo() {
        const fondoAleatorio = Math.floor(Math.random() * fondos.length);
        console.log("Cambiando fondo a:", fondos[fondoAleatorio]); 
        document.getElementById("background-container").style.backgroundImage = `url(${fondos[fondoAleatorio]})`;
        document.getElementById("background-container").style.backgroundSize = "cover";
        document.getElementById("background-container").style.backgroundPosition = "center";
    }

    cambiarFondo(); 
    setInterval(cambiarFondo, 5000); 
});
