const express = require('express');
const cors = require('cors'); // <-- Nuevo: Importar cors
const productosRouter = require('./routes/productos');

const app = express();
const PORT = 3001;

// Configuración de CORS: Permite que cualquier origen (tu frontend) acceda a la API
app.use(cors()); // <-- Nuevo: Usar el middleware de cors

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