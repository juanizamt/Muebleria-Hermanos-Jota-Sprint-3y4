// frontend/src/ListaProductos.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 

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
        <main className="featured-products">
            {/* ... header del catálogo ... */}

            <div className="products-container">
                {productos.map(producto => (
                    // 🚨 MODIFICACIÓN CLAVE: Envolver toda la tarjeta en <Link>
                    // El 'to' apunta a la ruta dinámica que creamos: /producto/ID_DEL_PRODUCTO
                    <Link 
                        key={producto.id} 
                        to={`/producto/${producto.id}`} 
                        className="product-card"
                        style={{ textDecoration: 'none', color: 'inherit' }} // Para que no parezca un enlace HTML
                    >
                        
                        {/* El contenido de la tarjeta va dentro del Link */}
                        <img 
                            src={producto.imagen || 'placeholder.jpg'} 
                            alt={producto.nombre} 
                            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                        />
                        
                        <div style={{ padding: '15px' }}>
                            <h2>{producto.nombre}</h2>
                            <p style={{ color: '#8b5e47', fontWeight: 'bold', fontSize: '1.2em' }}>
                                ${producto.precio ? producto.precio.toLocaleString('es-AR') : 'N/A'}
                            </p>
                            
                            {/* Opcional: Puedes quitar el botón "Añadir al Carrito" de aquí 
                                para que solo esté en la página de detalle, o dejarlo si es el diseño original.
                            <button className="btn" onClick={(e) => { e.preventDefault(); console.log('Añadir al carrito...') }}>
                                Añadir al Carrito
                            </button> 
                            */}
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}

export default ListaProductos;