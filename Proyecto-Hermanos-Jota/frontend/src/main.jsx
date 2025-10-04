// frontend/src/main.jsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' // Ya importamos la función createRoot
import './index.css'
import App from './App.jsx'
import ListaProductos from './ListaProductos.jsx';

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <StrictMode>
    <App /> {/* ¡Renderiza App! */}
  </StrictMode>
)

