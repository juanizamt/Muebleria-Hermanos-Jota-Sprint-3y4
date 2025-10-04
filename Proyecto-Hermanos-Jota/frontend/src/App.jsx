// frontend/src/App.jsx

import React from 'react';
import ListaProductos from './ListaProductos.jsx'; 
// Importamos el componente que ya funciona

function App() {
  return (
    // Usamos el fragmento <> </> como contenedor principal
    <>
      {/* ------------------- HEADER (Menú, Logo, Carrito) ------------------- */}
      <header className="header">
        <a href="/" className="logo-container">
          {/* Asume que tienes un logo en assets */}
          <img src="/assets/Fotos_Hermanos_Jota/logo.png" alt="Logo Hermanos Jota" /> 
          <h1>Hermanos Jota</h1>
        </a>
        <nav className="nav-menu">
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/catalogo">Catálogo</a></li>
            <li><a href="/contacto">Contacto</a></li>
            <li className="cart-icon">
              {/* Aquí iría el contador de carrito */}
              <a href="/carrito">🛒 (0)</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* ------------------- HERO BANNER (La sección grande inicial) ------------------- */}
      {/* 💡 Lo incluimos aquí aunque no se use en la vista de catálogo, para replicar tu HTML */}
      <section className="hero-banner">
        <div className="hero-content">
          <h1>Muebles con Historia y Estilo</h1>
          <p>Encuentra piezas únicas para tu hogar o negocio.</p>
          <a href="/catalogo" className="btn">Ver Catálogo</a>
        </div>
      </section>

      {/* ------------------- MAIN CONTENT: LISTA DE PRODUCTOS ------------------- */}
      {/* Aquí es donde renderizamos el componente de productos */}
      <main>
        <ListaProductos />
      </main>

      {/* ------------------- FOOTER (Pie de Página) ------------------- */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Mueblería Hermanos Jota. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default App;