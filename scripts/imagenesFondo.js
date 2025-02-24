//Script para cambiar imágenes de fondo dinámicamente
const fondos = [
    './scripts/imagenesFondo/img1.jpg',
    './scripts/imagenesFondo/img2.jpg',
    './scripts/imagenesFondo/img3.jpg',
    './scripts/imagenesFondo/img4.jpg'
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