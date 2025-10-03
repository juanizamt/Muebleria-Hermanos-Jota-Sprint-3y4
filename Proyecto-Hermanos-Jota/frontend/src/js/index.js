import { productos } from './productos.js';

const featuredProductsContainer = document.getElementById('featured-products-container');
const heroBanner = document.querySelector('.hero-banner');

function generarProductosDestacados() {
    const productosDestacados = productos.slice(0, 4);

    if (!featuredProductsContainer) return;

    productosDestacados.forEach(producto => {
        const productCard = document.createElement('a');
        productCard.classList.add('product-card');
        productCard.href = `producto.html?id=${producto.id}`; 

        productCard.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.alt}">
            <div class="card-info">
                <h3>${producto.nombre}</h3>
                <p class="precio">$${producto.precio} USD</p>
            </div>
        `;
        featuredProductsContainer.appendChild(productCard);
    });
}

function mostrarProductoAleatorio() {
    // 1. Elegir un índice aleatorio del array de productos
    const indiceAleatorio = Math.floor(Math.random() * productos.length);
    const productoAleatorio = productos[indiceAleatorio];

    // 2. Crear el elemento de imagen
    const imagenAleatoria = document.createElement('img');
    imagenAleatoria.src = productoAleatorio.imagen;
    imagenAleatoria.alt = productoAleatorio.alt;
    imagenAleatoria.classList.add('imagen-aleatoria-hero');

    // 3. Insertar la imagen en el hero banner
    heroBanner.appendChild(imagenAleatoria);
}

function actualizarContadorCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const cartCounter = document.getElementById('cart-counter');
    if (cartCounter) {
        cartCounter.textContent = carrito.length;
    }
}

// Llama a las funciones cuando la página se carga
window.addEventListener('load', () => {
    generarProductosDestacados();
    actualizarContadorCarrito();
    mostrarProductoAleatorio(); // Nuevo: Muestra la imagen aleatoria
});