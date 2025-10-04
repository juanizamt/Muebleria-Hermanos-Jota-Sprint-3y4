import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' // Ya importamos la función createRoot
import './index.css'
import App from './App.jsx'
import ListaProductos from './ListaProductos.jsx';

const container = document.getElementById('root')
// 1. Usar la función 'createRoot' directamente, no 'ReactDOM.createRoot'
const root = createRoot(container); 


root.render(
  <StrictMode>
    {/* Elige qué componente renderizar. Si usas App.jsx para la estructura, usa <App /> */}
    {/* Si no tienes App.jsx o quieres simplificar, usa <ListaProductos /> */}
    <ListaProductos /> 
  </StrictMode>
)

