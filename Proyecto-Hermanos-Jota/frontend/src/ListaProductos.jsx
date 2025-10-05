// frontend/src/ListaProductos.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 

function ListaProductos() {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
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
        // 🚨 Se usa una clase para el color rojo
        return <div className="catalogo-header error-text">{error}</div>; 
    }
    
    if (productos.length === 0) {
        return <div className="catalogo-header">No hay productos disponibles.</div>;
    }


    // ------------------- Renderizado de la lista de productos -------------------

    return (
        <main className="featured-products">
            <div className="catalogo-header">
                {/* Opcional: Podrías añadir aquí el campo de búsqueda/filtro */}
            </div>

            <div className="products-container">
                {productos.map(producto => (
                    <Link 
                        key={producto.id} 
                        to={`/producto/${producto.id}`} 
                        className="product-card product-link" // 🚨 Clase añadida aquí
                    >
                        
                        <img 
                            src={producto.imagen || 'placeholder.jpg'} 
                            alt={producto.nombre} 
                            className="product-card-image" // 🚨 Clase añadida aquí
                        />
                        
                        <div className="product-card-info"> {/* 🚨 Clase añadida aquí */}
                            <h2>{producto.nombre}</h2>
                            <p className="product-price"> {/* 🚨 Clase añadida aquí */}
                                ${producto.precio ? producto.precio.toLocaleString('es-AR') : 'N/A'}
                            </p>
                            
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}

export default ListaProductos;