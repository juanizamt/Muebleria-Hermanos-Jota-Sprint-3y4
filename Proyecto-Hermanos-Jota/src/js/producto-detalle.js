
import { productos } from './productos.js'; //se importa arreglo de productos


function cargarDetallesProducto() {
    // Se obtiene el ID del producto de la URL
    const params = new URLSearchParams(window.location.search);
    const productoId = params.get('id');

    if (!productoId) {
        // Se maneja el caso de que no haya un ID en la URL
        console.error('No se encontró un ID de producto en la URL.');
        return;
    }

    const btnAgregar = document.getElementById('agregar-carrito');
    if (btnAgregar) {
        btnAgregar.addEventListener('click', () => {
            agregarAlCarrito(productoSeleccionado);
        });
    }
    // Se encuentra el producto en el arreglo
    const productoSeleccionado = productos.find(p => p.id === productoId);

    if (!productoSeleccionado) {
        // En el caso de que el ID no corresponda a un producto
        console.error('Producto no encontrado.');
        return;
    } // termina funcion cargarDetallesProducto

    // Llenar la plantilla HTML con la información del producto
    document.getElementById('producto-img').src = productoSeleccionado.imagen;
    document.getElementById('producto-img').alt = productoSeleccionado.alt;
    document.getElementById('producto-nombre').textContent = productoSeleccionado.nombre;
    document.getElementById('producto-descripcion').textContent = productoSeleccionado.descripcion;
    document.getElementById('producto-precio').textContent = `$${productoSeleccionado.precio} USD`;
}



function agregarAlCarrito(producto) {
    
    let carrito = JSON.parse(localStorage.getItem('carrito')) || []; // inicializa el carrito desde localStorage o como un arreglo vacío
    
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));

    alert(`${producto.nombre} ha sido añadido al carrito.`);
    actualizarContadorCarrito(); // Actualiza el contador en la barra de navegación
}

function actualizarContadorCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const cartCounter = document.getElementById('cart-counter');
    if (cartCounter) {
        cartCounter.textContent = carrito.length;
    }
}


// Llama a la función al cargar la página de detalles
window.addEventListener('load', () => {
    cargarDetallesProducto();
    actualizarContadorCarrito();
});