// frontend/src/ProductoDetalle.jsx

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// 🚨 NO ES NECESARIO ELIMINAR EL MENSAJEESTILO DE AQUÍ
// El error de definición se arregló antes, pero lo eliminaremos al final.

function ProductoDetalle({ addToCart }) { 
    const { id } = useParams(); 
    
    const [producto, setProducto] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    
    // Estado para controlar la visibilidad del mensaje
    const [mensajeVisible, setMensajeVisible] = useState(false);

    useEffect(() => {
        const API_URL = `http://localhost:3001/api/productos/${id}`;

        fetch(API_URL)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Producto no encontrado o error HTTP: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                setProducto({ ...data, id: id }); 
                setCargando(false);
            })
            .catch(err => {
                console.error("Error al obtener el producto:", err);
                setError("❌ No se pudo cargar el detalle del producto.");
                setCargando(false);
            });
    }, [id]); 
    
    // Función que maneja la adición y el mensaje de confirmación
    const handleAddToCart = () => {
        if (producto) {
            // 1. Ejecuta la lógica central del carrito
            addToCart(producto); 
            
            // 2. Muestra el mensaje de confirmación
            setMensajeVisible(true);
            
            // 3. Oculta el mensaje después de 3 segundos (3000 ms)
            setTimeout(() => {
                setMensajeVisible(false);
            }, 3000);
        }
    };
    
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
        <main className="featured-products"> 
            <div className="catalogo-header">
                 <Link to="/catalogo" className="btn" style={{marginBottom: '20px'}}>
                    ← Volver al Catálogo
                 </Link>
            </div>
            
            {/* 🚨 AHORA USA LA CLASE DE CSS */}
            {mensajeVisible && (
                <div className="cart-confirmation-message">
                    ✅ ¡**{producto.nombre}** añadido al carrito!
                </div>
            )}
            

            {/* Contenedor de Detalle */}
            <div 
                className="producto-detalle" 
                
            >
                
                {/* Columna de Imagen */}
                <div className="image-column">
                    <img 
                        src={producto.imagen || '/assets/Fotos_Hermanos_Jota/placeholder.jpg'} 
                        alt={producto.nombre} 
                        className="producto-detalle-imagen" 
                    />
                </div>
                
                {/* Columna de Información */}
                <div className="info-column"> {/* Usamos la clase info-column */}
                    <h1 style={{ color: '#333' }}>{producto.nombre}</h1>
                    
                    <p style={{ fontSize: '2em', fontWeight: 'bold', color: '#8b5e47', margin: '15px 0' }}>
                        $ {producto.precio ? producto.precio.toLocaleString('es-AR') : 'Precio no disponible'}
                    </p>
                    
                    <p style={{ lineHeight: '1.6', color: '#555' }}>
                        {producto.descripcion || 'Descripción detallada del producto no disponible.'}
                    </p>
                    
                    {/* Botón para Carrito */}
                    <button 
                        className="btn" 
                        onClick={handleAddToCart}
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

// 🚨 ELIMINA CUALQUIER DEFINICIÓN DE 'mensajeEstilo' QUE ESTUVIERA AQUÍ ABAJO