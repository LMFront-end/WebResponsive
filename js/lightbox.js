const imagenes = document.querySelectorAll('.img-galeria');
const imagenesLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');
const hamburguer1 = document.querySelector('.hamburguer');

/* console.log(imagenes);
console.log(imagenesLight);
console.log(contenidoLight); */

imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        aparecerImagen(imagen.getAttribute('src'));
        //alert('funciona');
        //mirar la ruta de la imagen
        /* console.log(imagen.getAttribute('src')); */
    })
})

contenedorLight.addEventListener('click', (e) => {
    //console.log(e.target);
    if (e.target !== imagenesLight) {
        contenedorLight.classList.toggle('show');

        imagenesLight.classList.toggle('showImage')

        hamburguer1.style.opacity = '1';
    }
})

const aparecerImagen = (imagen) => {
    imagenesLight.src = imagen;

    contenedorLight.classList.toggle('show');

    imagenesLight.classList.toggle('showImage');

    hamburguer1.style.opacity = '0';

}