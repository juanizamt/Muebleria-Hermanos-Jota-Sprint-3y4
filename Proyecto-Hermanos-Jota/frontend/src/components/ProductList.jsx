
import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ products, onSelectProduct }) {
  if (!Array.isArray(products)) {
    return null;
  }
  return (
    <div className="products-container">
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onSelectProduct={onSelectProduct}
        />
      ))}
    </div>
  );
}
export default ProductList;