// frontend/src/Contacto.jsx

import React, { useState } from 'react';

function Contacto() {
    // 1. Estado para almacenar los datos del formulario. 
    // Los campos deben coincidir con los atributos 'name' de los inputs.
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    });

    // Estado para manejar el mensaje de éxito después del envío
    const [mensajeEnvio, setMensajeEnvio] = useState('');

    // 2. Función genérica para manejar el cambio en cualquier input
    // Actualiza el estado 'formData' manteniendo los campos existentes (spread operator: ...formData)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value // [name] es la clave dinámica (nombre, email, etc.)
        }));
    };

    // 3. Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault(); // Detiene el comportamiento por defecto de recargar la página

        //Imprime el objeto de estado completo en la consola
        console.log("Datos del formulario enviados:", formData);

        //Muestra un mensaje de éxito en la UI
        setMensajeEnvio("✅ ¡Mensaje enviado con éxito! Revisaremos tu consulta pronto.");

        // Opcional: Limpiar el formulario después del envío
        setFormData({
            nombre: '',
            email: '',
            telefono: '',
            mensaje: ''
        });
    };

    return (
        <main className="featured-products" style={{ padding: '2rem' }}>
            <h1 className="featured-title">Contactanos</h1>
            <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
                Tenes alguna pregunta? Envíanos un mensaje.
            </p>

            {/* Mensaje de éxito visible */}
            {mensajeEnvio && (
                <div style={{ 
                    textAlign: 'center', 
                    color: 'green', 
                    padding: '1rem', 
                    marginBottom: '1rem',
                    border: '1px solid green',
                    borderRadius: '5px'
                }}>
                    {mensajeEnvio}
                </div>
            )}

            
            <form 
                className="producto-detalle" 
                onSubmit={handleSubmit} 
                style={{ margin: '0 auto', maxWidth: '450px', display: 'flex', flexDirection: 'column', gap: '15px' }}
            >
                {/* Campo Nombre */}
                <div>
                    <label htmlFor="nombre">Nombre Completo:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre} 
                        onChange={handleChange} // El cambio actualiza el estado
                        required
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                    />
                </div>

                {/* Campo Email */}
                <div>
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                    />
                </div>
                
                {/* Campo Teléfono (Opcional) */}
                <div>
                    <label htmlFor="telefono">Teléfono:</label>
                    <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                    />
                </div>

                {/* Campo Mensaje */}
                <div>
                    <label htmlFor="mensaje">Tu Mensaje:</label>
                    <textarea
                        id="mensaje"
                        name="mensaje"
                        rows="4"
                        value={formData.mensaje}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                    ></textarea>
                </div>

          
                <button type="submit" className="btn" style={{ marginTop: '10px' }}>
                    Enviar Consulta
                </button>
            </form>
        </main>
    );
}

export default Contacto;