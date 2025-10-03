const productos = [
    {
        id: 'silla-cordoba',
        nombre: 'Sillas Córdoba',
        precio: 750,
        imagen: './assets/Fotos_hermanos_jota/Sillas Córdoba.png',
        descripcion: 'Inspiradas en el diseño moderno y construidas con la robustez de la madera maciza, las Sillas Córdoba son la pieza perfecta para cualquier espacio contemporáneo.',
        alt: 'Sillas Córdoba de madera'
    },
    {
        id: 'aparador-uspallata',
        nombre: 'Aparador Uspallata',
        precio: 1200,
        imagen: './assets/Fotos_hermanos_jota/Aparador Uspallata.png',
        descripcion: 'Inspirado en la majestuosidad de la cordillera de Uspallata, este aparador combina la solidez de la madera maciza con detalles de diseño minimalista.',
        alt: 'Aparador Uspallata: Un mueble robusto y elegante con diseño minimalista.'
    },
    {
        id: 'biblioteca-recoleta',
        nombre: 'Biblioteca Recoleta',
        precio: 950,
        imagen: './assets/Fotos_hermanos_jota/Biblioteca Recoleta.png',
        descripcion: 'Con líneas clásicas que rinden homenaje a la arquitectura del barrio de Recoleta, esta biblioteca es un mueble atemporal. Es la combinación perfecta de funcionalidad y sofisticación.',
        alt: 'Biblioteca Recoleta: Un mueble clásico de madera con estantes ajustables.'
    },
    {
        id: 'butaca-mendoza',
        nombre: 'Butaca Mendoza',
        precio: 800,
        imagen: './assets/Fotos_hermanos_jota/Butaca Mendoza.png',
        descripcion: 'La butaca Mendoza es la definición de confort y estilo. Diseñada con un asiento profundo y un respaldo curvo, ofrece una experiencia de descanso inigualable. ',
        alt: 'Butaca Mendoza: Un sillón acogedor con asiento profundo y tapizado de alta calidad.'
    },
    {
        id: 'escritorio-costa',
        nombre: 'Escritorio Costa',
        precio: 700,
        imagen: './assets/Fotos_hermanos_jota/Escritorio Costa.png',
        descripcion: 'Con un diseño que evoca la simplicidad y tranquilidad de la costa, este escritorio es la pieza ideal para crear un espacio de trabajo productivo. Sus líneas limpias y su amplia superficie de madera te brindan un entorno libre de distracciones, mientras que su cajón oculto mantiene tus herramientas organizadas.',
        alt: 'Escritorio Costa: Un escritorio minimalista de madera con cajón oculto.'
    },
    {
        id: 'mesa-comedor-pampa',
        nombre: 'Mesa Comedor Pampa',
        precio: 1500,
        imagen: './assets/Fotos_hermanos_jota/Mesa Comedor Pampa.png',
        descripcion: 'Fuerte y espaciosa, la mesa comedor Pampa está construida para durar. Su diseño simple y robusto celebra la vasta extensión de la llanura pampeana. Con espacio para toda la familia, es el centro de reuniones perfecto para comidas memorables y conversaciones importantes, un mueble que pasará de generación en generación.',
        alt: 'Mesa Comedor Pampa: Una mesa grande y robusta, ideal para reuniones familiares.'
    },
    {
        id: 'mesa-centro-araucaria',
        nombre: 'Mesa de Centro Araucaria',
        precio: 550,
        imagen: './assets/Fotos_hermanos_jota/Mesa de Centro Araucaria.png',
        descripcion: 'Esculpida a mano con un diseño que imita las formas del árbol de araucaria, esta mesa de centro es una obra de arte funcional. Su superficie de madera con acabados detallados y sus patas geométricas la hacen un punto focal en cualquier sala de estar. Es la fusión perfecta entre la naturaleza y el diseño moderno.',
        alt: 'Mesa de Centro Araucaria: Una mesa de centro con formas geométricas inspiradas en la naturaleza.'
    },
    {
        id: 'mesa-noche-aconcagua',
        nombre: 'Mesa de Noche Aconcagua',
        precio: 350,
        imagen: './assets/Fotos_hermanos_jota/Mesa de Noche Aconcagua.png',
        descripcion: 'Inspirada en la cumbre más alta de América, la mesa de noche Aconcagua se destaca por su solidez y elegancia. Su diseño compacto y sus líneas limpias la hacen perfecta para espacios pequeños, mientras que su cajón y estante abierto ofrecen la funcionalidad necesaria para tus pertenencias más personales.',
        alt: 'Mesa de Noche Aconcagua: Una mesita compacta y elegante con cajón y estante.'
    },
    {
        id: 'silla-trabajo-belgrano',
        nombre: 'Silla de Trabajo Belgrano',
        precio: 450,
        imagen: './assets/Fotos_hermanos_jota/Silla de Trabajo Belgrano.png',
        descripcion: 'La silla de trabajo Belgrano es la compañera ideal para tu escritorio. Su diseño ergonómico y su respaldo curvo te brindan el soporte que necesitas durante largas horas de trabajo. Combinando la artesanía tradicional con la funcionalidad moderna, esta silla es un testimonio de comodidad y durabilidad.',
        alt: 'Silla de Trabajo Belgrano: Una silla ergonómica de madera para escritorio.'
    },
    {
        id: 'sillon-copacabana',
        nombre: 'Sillón Copacabana',
        precio: 900,
        imagen: './assets/Fotos_hermanos_jota/Sillón_Copacabana.png',
        descripcion: 'El sillón Copacabana es un llamado a la relajación y el confort. Su diseño amplio y sus cojines extra suaves te invitan a un merecido descanso. Con su estructura de madera expuesta, logra un equilibrio entre lo moderno y lo natural, convirtiéndolo en la pieza perfecta para cualquier sala.',
        alt: 'Sillón Copacabana: Un sillón amplio y acogedor con cojines suaves.'
    },
    {
        id: 'sofa-patagonia',
        nombre: 'Sofá Patagonia',
        precio: 1800,
        imagen: './assets/Fotos_hermanos_jota/Sofá Patagonia.png',
        descripcion: 'Inspirado en la inmensidad de la Patagonia, este sofá es la pieza central de cualquier sala de estar. Su diseño modular y su tapizado de alta resistencia garantizan comodidad y versatilidad. Es un mueble que, al igual que la región que lo nombra, es imponente y lleno de calidez.',
        alt: 'Sofá Patagonia: Un sofá modular grande y espacioso, ideal para familias.'
    },
    {
        id: 'cama-neuquen',
        nombre:'Cama Neuquén',
        precio: 1200,
        imagen: 'assets/Fotos_hermanos_jota/cama-neuquen.png',
        descripcion: 'Cama plataforma con cabecero flotante tapizado en lino natural y estructura de madera maciza. Su diseño minimalista y sofisticado crea un ambiente de serenidad y elegancia, perfecto para dormitorios contemporáneos que buscan paz y simplicidad.',
        alt: 'Cama Neuquén: Una cama con plataforma con cabecero flotante'
    }
];


export { productos }; // permite que el arreglo pueda ser importado en producto-detalle.js


const catalogoContainer = document.getElementById('catalogo-container');

function generarCatalogo() {
    productos.forEach(producto => {
        const productCard = document.createElement('a');
        productCard.classList.add('product-card');
        productCard.href = `producto.html?id=${producto.id}`; //  El enlace clave

        productCard.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.alt}">
            <div class="card-info">
                <h3>${producto.nombre}</h3>
                <p class="precio">$${producto.precio} USD</p>
                <!-- <button class="btn-agregar">Añadir al Carrito</button> --> <!-- Solo se va a poder añadir al carrito en producto.html -->
            </div>
        `;
        catalogoContainer.appendChild(productCard);
    });
}

window.addEventListener('load', generarCatalogo);