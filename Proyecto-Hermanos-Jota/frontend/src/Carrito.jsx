// frontend/src/Carrito.jsx

import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';

function Carrito({ cart, totalPrice, removeFromCart, clearCart, addToCart }) {

    const [compraExitosa, setCompraExitosa] = useState(false);

    const handleCheckout = () => {
        if (cart.length === 0) return; 

        setCompraExitosa(true);

        setTimeout(() => {
            clearCart(); 
            setCompraExitosa(false);
        }, 3000); 
    };

    // ------------------- Renderizado de Carrito Vacío o Compra Exitosa -------------------

    // Mensaje de compra exitosa
    if (compraExitosa) {
        return (
            <main className="cart-empty-state">
                
                <div className="cart-confirmation-message cart-confirmation-message-static"> 
                   ¡Gracias por tu compra! El pedido ha sido procesado con éxito.
                </div>
                <h2>🛒 Carrito de Compras</h2>
                <hr />
                
                <p className="cart-empty-state-margin-top">Tu carrito está ahora vacío.</p>
                
                <Link to="/catalogo" className="btn cart-empty-state-margin-top">
                    Seguir Comprando
                </Link>
            </main>
        );
    }

    // Carrito vacío (y no hay mensaje de compra exitosa)
    if (cart.length === 0) { 
        return (
            <main className="cart-empty-state">
                <h2>🛒 Carrito de Compras</h2>
                <hr />
                <p>Tu carrito está vacío. ¡Empieza a llenarlo con nuestros increíbles productos!</p>
                <Link to="/catalogo" className="btn cart-empty-state-margin-top">
                    Ver Catálogo
                </Link>
            </main>
        );
    }


    // ------------------- Renderizado de Carrito Lleno -------------------

    return (
        <main className="cart-main-padded">
            <h2>🛒 Tu Carrito</h2>
            <hr />

            
            <div className="cart-columns"> 
                
                {/* COLUMNA DE ÍTEMS */}
                <div className="cart-items cart-items-column"> {/* 🚨 CLASE AÑADIDA */}
                    {cart.map(item => (
                        <div key={item.id} className="cart-item">
                            <img 
                                src={item.imagen} 
                                alt={item.nombre} 
                                className="cart-item-image"
                            />
                            <div className="cart-item-info">
                                <h4>{item.nombre}</h4>
                                <p>Cantidad: <strong>{item.quantity}</strong></p>
                                
                                {/* Botones de cantidad y borrado */}
                                <div className="qty-controls-wrapper"> {/* 🚨 CLASE AÑADIDA */}
                                    <button 
                                        onClick={() => addToCart(item)} 
                                        className="btn-qty-control">+</button>
                                        
                                    <button 
                                        onClick={() => removeFromCart(item.id)} 
                                        className="btn-qty-control">-</button>
                                        
                                    {/* Botón de ELIMINAR COMPLETAMENTE */}
                                    <button
                                        onClick={() => removeFromCart(item.id, true)} 
                                        className="btn-remove-item">
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                            <div className="cart-item-price">
                                
                                <p className="cart-item-price-total"> 
                                    $ {(item.precio * item.quantity).toFixed(2)}
                                </p>
                                
                                <p className="cart-item-price-unit">($ {item.precio.toFixed(2)} c/u)</p>
                            </div>
                        </div>
                    ))}
                    
                    {/* Botón de Vaciar Carrito Completo */}
                    <button 
                        onClick={clearCart}
                        className="btn-clear-cart">
                        Vaciar Carrito
                    </button>
                </div>

                {/* COLUMNA DEL RESUMEN */}
                <div className="cart-summary">
                    <h3>Resumen del Pedido</h3>
                    <hr />
                    <div className="cart-total-row">
                        <p>Subtotal ({cart.reduce((total, item) => total + item.quantity, 0)} productos):</p>
                        <p>${totalPrice}</p>
                    </div>
                    
                    
                    <div className="cart-total-row cart-total-row-no-border">
                        <h4>Total a Pagar:</h4>
                        
                        <h4 className="cart-final-total-color">$ {totalPrice}</h4>
                    </div>
                    
                    {/* Botón de Finalizar Compra */}
                    <button 
                        className="btn btn-checkout" 
                        onClick={handleCheckout} 
                    >
                        Finalizar Compra
                    </button>
                </div>

            </div>
        </main>
    );
}

export default Carrito;