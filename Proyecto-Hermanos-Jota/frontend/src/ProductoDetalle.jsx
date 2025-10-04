// frontend/src/ProductoDetalle.jsx

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function ProductoDetalle() {
    // Extrae el parámetro 'id' de la URL (ej: /producto/1)
    const { id } = useParams(); 
    
    const [producto, setProducto] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        // Asumiendo que el backend tiene la ruta: http://localhost:3001/api/productos/1
        const API_URL = `http://localhost:3001/api/productos/${id}`;

        fetch(API_URL)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Producto no encontrado o error HTTP: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                setProducto(data);
                setCargando(false);
            })
            .catch(err => {
                console.error("Error al obtener el producto:", err);
                setError("❌ No se pudo cargar el detalle del producto.");
                setCargando(false);
            });
    }, [id]); // El useEffect se ejecuta cada vez que el ID cambia
    
    // ------------------- Renderizado de estados -------------------
    
    if (cargando) {
        return <main className="featured-products"><div className="catalogo-header">Cargando detalles...</div></main>;
    }

    if (error) {
        return <main className="featured-products"><div className="catalogo-header" style={{ color: 'red' }}>{error}</div></main>;
    }
    
    if (!producto) {
         return <main className="featured-products"><div className="catalogo-header">Producto no encontrado.</div></main>;
    }


    // ------------------- Renderizado del producto -------------------
    return (
        // Usamos la clase 'featured-products' para mantener el padding/margen
        <main className="featured-products"> 
            <div className="catalogo-header">
                 <Link to="/catalogo" className="btn" style={{marginBottom: '20px'}}>
                    ← Volver al Catálogo
                 </Link>
            </div>

            {/* Contenedor de Detalle (puedes usar la clase que mejor se adapte a tu CSS) */}
            <div 
                className="producto-detalle" 
                // ¡Dejemos el estilo principal del Flexbox aquí!
                style={{ display: 'flex', gap: '40px', maxWidth: '1000px', margin: '0 auto', alignItems: 'flex-start' }}
            >
                
                {/* Columna de Imagen */}
                <div className="image-column"
                
                    style={{ 
                        flex: '0 0 50%', 
                        minWidth: '400px',
                        // ¡Añade o confirma que este estilo esté aquí!
                        backgroundColor: 'red' 
                    }} 
                >

                    
                    <img 
                        src={producto.imagen || '/assets/Fotos_Hermanos_Jota/placeholder.jpg'} 
                        alt={producto.nombre} 
                        className="producto-detalle-imagen" // <-- USAMOS ESTA CLASE
                    />
                </div>
                
                {/* Columna de Información */}
                <div style={{ flex: '1 1 50%', padding: '20px', borderLeft: '1px solid #eee' }}>
                    <h1 style={{ color: '#333' }}>{producto.nombre}</h1>
                    
                    <p style={{ fontSize: '2em', fontWeight: 'bold', color: '#8b5e47', margin: '15px 0' }}>
                        ${producto.precio ? producto.precio.toLocaleString('es-AR') : 'Precio no disponible'}
                    </p>
                    
                    <p style={{ lineHeight: '1.6', color: '#555' }}>
                        {producto.descripcion || 'Descripción detallada del producto no disponible.'}
                    </p>
                    
                    {/* Botón para Carrito (Requisito 4) */}
                    <button 
                        className="btn" 
                        // NOTA: Aquí iría la lógica de añadir al carrito que desarrollaremos después
                        onClick={() => console.log(`Añadido al carrito: ${producto.id}`)}
                        style={{ marginTop: '30px', padding: '12px 25px', fontSize: '1.1em' }}
                    >
                        Añadir al Carrito
                    </button>
                    

                </div>
            </div>
        </main>
    );
}

export default ProductoDetalle;