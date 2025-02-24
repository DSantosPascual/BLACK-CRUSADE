//Script para cambiar imágenes de fondo dinámicamente
const fondos = [
    '/images/fondo1.jpg',
    '/images/fondo2.jpg',
    '/images/fondo3.jpg'
];
let indiceFondo = 0;


function cambiarFondo() {
    
    document.body.style.backgroundImage = `url(${fondos[indiceFondo]})`;
    document.body.style.backgroundSize = 'cover';  
    document.body.style.backgroundPosition = 'center';  
    document.body.style.transition = 'background-image 1s ease';  
    
    indiceFondo = (indiceFondo + 1) % fondos.length;  
}

setInterval(cambiarFondo, 5000);  

cambiarFondo();