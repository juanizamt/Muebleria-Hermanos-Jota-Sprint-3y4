// frontend/src/ListaProductos.jsx

import React, { useState, useEffect } from 'react';

function ListaProductos() {
    // Estado para almacenar los productos, el estado de carga y posibles errores
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // La URL de tu API en el backend (¡Puerto 3001!)
        const API_URL = 'http://localhost:3001/api/productos';

        fetch(API_URL)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Error HTTP: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                setProductos(data);
                setCargando(false);
            })
            .catch(err => {
                console.error("No se pudo conectar al backend:", err);
                setError("❌ Error: No se pudo obtener la lista de productos. Asegúrate que el servidor de Express esté corriendo en el puerto 3001.");
                setCargando(false);
            });
    }, []); 
    
    // ------------------- Renderizado de estados -------------------
    
    if (cargando) {
        return <div className="catalogo-header">Cargando productos...</div>;
    }

    if (error) {
        return <div className="catalogo-header" style={{ color: 'red' }}>{error}</div>;
    }
    
    if (productos.length === 0) {
         return <div className="catalogo-header">No hay productos disponibles.</div>;
    }


    // ------------------- Renderizado de la lista de productos -------------------

    return (
        // Usamos la etiqueta 'main' y la clase 'featured-products' para el layout
        <main className="featured-products">
            <div className="catalogo-header">
                <h1 className="featured-title">Nuestros Productos Destacados</h1>
                {/* Aquí podrías añadir un input de búsqueda si es necesario */}
            </div>

            {/* Contenedor que aplica la grilla CSS */}
            <div className="products-container">
                {productos.map(producto => (
                    // La clase 'product-card' define la tarjeta visual
                    <div key={producto.id} className="product-card">
                        {/* ⚠️ Nota: Asume que tienes un campo 'imagen' en tus datos JSON */}
                        <img 
                            className="imagen-aleatoria-hero"
                            src={producto.imagen || '/assets/Fotos_Hermanos_Jota/mesa_nordica.jpg'} 
                            alt={producto.nombre} 
                        />
                        
                        <div style={{ padding: '15px' }}>
                            <h2>{producto.nombre}</h2>
                            <p style={{ color: '#8b5e47', fontWeight: 'bold', fontSize: '1.2em' }}>
                                ${producto.precio ? producto.precio.toLocaleString('es-AR') : 'N/A'}
                            </p>
                            
                            {/* Botón con la clase 'btn' para el estilo */}
                            <button className="btn" onClick={() => console.log(`Añadir al carrito: ${producto.nombre}`)}>
                                Añadir al Carrito
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default ListaProductos;