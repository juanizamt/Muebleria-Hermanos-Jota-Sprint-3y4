
const carritoContainer = document.getElementById('carrito-container');
const totalElement = document.getElementById('total-carrito');

function mostrarProductosCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    carritoContainer.innerHTML = '';
    let total = 0;

    if (carrito.length === 0) {
        carritoContainer.innerHTML = '<p>Tu carrito está vacío.</p>';
        totalElement.textContent = '0';
    } else {
        carrito.forEach(producto => {
            const item = document.createElement('div');
            item.classList.add('carrito-item-compacto');
            
            item.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.alt}" class="carrito-item-imagen">
                <div class="item-info-compacto">
                    <h4>${producto.nombre}</h4>
                    <p class="precio">$${producto.precio} USD</p>
                </div>
            `;
            
            carritoContainer.appendChild(item);
            total += producto.precio;
        });
        totalElement.textContent = total;
    }
}


// Llama a la función principal al cargar la página
window.addEventListener('load', mostrarProductosCarrito);

// Para mantener el contador del carrito en la barra de navegación
function actualizarContadorCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const cartCounter = document.getElementById('cart-counter');
    if (cartCounter) {
        cartCounter.textContent = carrito.length;
    }
}
window.addEventListener('load', actualizarContadorCarrito);



const btnFinalizar = document.getElementById('btn-comprar');

if (btnFinalizar) {
    btnFinalizar.addEventListener('click', () => {
        alert('Gracias por tu compra. Nos pondremos en contacto contigo para coordinar la entrega.');
        localStorage.removeItem('carrito');
    });
}