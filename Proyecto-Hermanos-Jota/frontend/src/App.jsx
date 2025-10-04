import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail'; 
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const VIEWS = {
  CATALOG: 'catalog',
  DETAIL: 'detail',
  CONTACT: 'contact',
};

function App() {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [currentView, setCurrentView] = useState(VIEWS.CATALOG);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const [cart, setCart] = useState([]);

  const handleSelectProduct = (productData) => {
    setSelectedProduct(productData);
    setCurrentView(VIEWS.DETAIL);
  };
  
  const handleBackToCatalog = () => {
    setSelectedProduct(null);
    setCurrentView(VIEWS.CATALOG);
  };
  
  const handleAddToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/productos'); 

        if (!response.ok) {
          throw new Error('Error al cargar los productos');
        }

        const data = await response.json();
        setProducts(data);

      } catch (err) {
        setError('Error al cargar los productos');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  let content;

  if (loading) {
    content = <div>Cargando...</div>;
  } else if (error) {
    content = <div>{error}</div>; 
  } else if (currentView === VIEWS.DETAIL && selectedProduct) {
    content = (
        <ProductDetail 
            product={selectedProduct} 
            onAddToCart={handleAddToCart}
            onBackToCatalog={handleBackToCatalog}
        />
    );
  } else if (currentView === VIEWS.CONTACT) {
    content = (
      <>
        <h1 className="catalogo-header">Contacto</h1>
        <ContactForm />
      </>
    );
  } else {
    content = (
      <>
        <h1 className="catalogo-header">Catálogo de Productos</h1>
        <ProductList products={products} onSelectProduct={handleSelectProduct} />
      </>
    );
  }

  return (
    <div className="App">
      <ProductList />
    </div>
  );
}

export default App;