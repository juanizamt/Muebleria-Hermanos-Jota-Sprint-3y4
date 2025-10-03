document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-contacto');
    const mensajeExito = document.getElementById('mensaje-exito'); // Elemento para mostrar el mensaje de éxito

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita que la página se recargue

        // Aca iría la lógica para enviar el formulario a un servicio de backend,
        // como Formspree o un servidor propio. Por ahora solo simula el éxito.

        
        mensajeExito.textContent = '¡Gracias por tu mensaje! Te responderemos pronto.';
        mensajeExito.classList.remove('hidden');
        form.reset();
    });
});