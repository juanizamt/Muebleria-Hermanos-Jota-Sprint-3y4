// backend/routes/productos_busqueda.js 

const express = require('express');
const router = express.Router();


const productosData = require('../productos.js'); 

//RUTA PARA TODOS LOS PRODUCTOS 
router.get('/', (req, res) => {
    res.json(productosData); 
});

//RUTA PARA UN PRODUCTO ESPECÍFICO
router.get('/:id', (req, res) => {
    const idProducto = req.params.id; 

    const producto = productosData.find(p => p.id === idProducto); 
    
    if (producto) {
        res.json(producto);
    } else {
        
        res.status(404).json({ mensaje: 'Producto no encontrado' }); 
    }
});

module.exports = router;