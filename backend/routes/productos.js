const express = require('express');
const productos = require('../productos')

const router = express.Router();

router.get("/", (req, res) => {
    res.json(productos);
});

router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const producto = productos.find(p => p.id === id);

    if (!producto) {
        return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.json(producto);
});

module.exports = router;