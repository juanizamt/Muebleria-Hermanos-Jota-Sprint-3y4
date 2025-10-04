// frontend/src/App.jsx

import React from 'react';
// Importamos las herramientas de routing
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Importamos los componentes
import ListaProductos from './ListaProductos.jsx'; 
import Contacto from './Contacto.jsx';
import Carrito from './Carrito.jsx';

// El componente Home contendrá el Hero Banner y los Productos
const Home = () => (
    <>
        {/* HERO BANNER (solo se muestra en la página de inicio) */}
        <section className="hero-banner">
            <div className="hero-content">
                <h1>Muebles con Historia y Estilo</h1>
                <p>Encuentra piezas únicas para tu hogar o negocio.</p>
                <Link to="/catalogo" className="btn">Ver Catálogo</Link>
            </div>
        </section>
        
        {/* PRODUCTOS DESTACADOS / CATÁLOGO */}
        <main>
             <ListaProductos />
        </main>
    </>
);


function App() {
  return (
    // 1. Envolvemos toda la aplicación en el Router
    <Router>
      
      {/* ------------------- HEADER (Menú, Logo, Carrito) ------------------- */}
      <header className="header">
        <Link to="/" className="logo-container"> 
          <img src="../assets/Fotos_Hermanos_Jota/logo.png" alt="Logo Hermanos Jota" /> 
          <h1>Hermanos Jota</h1>
        </Link>
        <nav className="nav-menu">
          <ul>
            {/* 2. Sustituimos las etiquetas <a> por el componente <Link> de React Router */}
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/catalogo">Catálogo</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
            <li className="cart-icon">
              <Link to="/carrito">🛒 (0)</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* ------------------- CONTENEDOR DE RUTAS ------------------- */}
      <div style={{minHeight: '80vh'}}> 
        <Routes>
            {/* La ruta principal '/' muestra el Home (Hero + Productos) */}
            <Route path="/" element={<Home />} />
            
            {/* La ruta '/catalogo' muestra solo la lista de productos (solo el main) */}
            {/* Si quieres que solo se muestre el catálogo sin el hero banner, sería así: */}
            <Route path="/catalogo" element={<main><ListaProductos /></main>} />
            
            {/* La ruta '/contacto' muestra el componente Contacto */}
            <Route path="/contacto" element={<Contacto />} />
            
            {/* La ruta '/carrito' muestra el componente Carrito */}
            <Route path="/carrito" element={<Carrito />} />
            
            {/* Agregaremos una ruta para el detalle del producto más tarde */}
        </Routes>
      </div>


      {/* ------------------- FOOTER (Pie de Página) ------------------- */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Mueblería Hermanos Jota. Todos los derechos reservados.</p>
      </footer>
    </Router>
  );
}

export default App;