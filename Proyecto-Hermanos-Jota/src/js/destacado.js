const productos = [
    {
        id: 'silla-trabajo-belgrano',
        nombre: 'Silla de Trabajo Belgrano',
        precio: 450,
        imagen: './assets/Fotos_hermanos_jota/Silla de Trabajo Belgrano.png',
        alt: 'Silla de Trabajo Belgrano'
    },
    {
        id: 'sillon-copacabana',
        nombre: 'Sillón Copacabana',
        precio: 900,
        imagen: './assets/Fotos_hermanos_jota/Sillón_Copacabana.png',
        alt: 'Sillón Copacabana'
    },
    {
        id: 'sofa-patagonia',
        nombre: 'Sofá Patagonia',
        precio: 1800,
        imagen: './assets/Fotos_hermanos_jota/Sofá Patagonia.png',
        alt: 'Sofá Patagonia'
    },
    {
        id: 'cama-neuquen',
        nombre:'Cama Neuquén',
        precio: 1200,
        imagen: 'assets/Fotos_hermanos_jota/cama-neuquen.png',
        alt: 'Cama Neuquén'
    }
    
];


const containerDestacado = document.getElementById('featured-products-container');

function generarDestacados() {
    if (containerDestacado) {
        const productosParaMostrar = productos.slice(0, 3);

        productosParaMostrar.forEach(producto => {
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
            containerDestacado.appendChild(productCard);
        });
    }
}


window.addEventListener('load', generarDestacados);


export { productos };