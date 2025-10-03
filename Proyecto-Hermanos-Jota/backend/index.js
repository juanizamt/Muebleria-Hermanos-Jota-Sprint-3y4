const express = require('express');
const productosRouter = require('./routes/productos');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

app.use('/api/productos', productosRouter);

app.use((req, res) => {
    res.status(404).json({ error: "Ruta no encontrada"});
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({error: "Error interno del servidor"});
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});