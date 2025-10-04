// frontend/src/components/ProductList.js

import React, { useState, useEffect } from 'react';

function ProductList() {
    // 1. Estado para almacenar los productos y el estado de carga
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // La URL de tu API en el backend (IMPORTANTE: Puerto 3001)
        const API_URL = 'http://localhost:3001/api/productos';

        fetch(API_URL)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Error HTTP: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                // 2. Éxito: Guardar los datos y terminar la carga
                setProductos(data);
                setCargando(false);
            })
            .catch(err => {
                // 3. Error: Mostrar mensaje y terminar la carga
                console.error("No se pudo conectar al backend:", err);
                setError("No se pudo obtener la lista de productos. Asegúrate que el servidor de Express esté corriendo en el puerto 3001.");
                setCargando(false);
            });
    }, []); // El array vacío [] asegura que la función se ejecute solo una vez al montar.

    if (cargando) {
        return <div>Cargando productos...</div>;
    }

    if (error) {
        return <div style={{ color: 'red' }}>Error: {error}</div>;
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1>Catálogo Hermanos Jota</h1>
            {productos.map(producto => (
                <div key={producto.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '15px' }}>
                    <h2>{producto.nombre}</h2>
                    <p>ID: {producto.id}</p>
                    <p>Precio: **${producto.precio.toLocaleString()}**</p>
                </div>
            ))}
        </div>
    );
}

export default ProductList;