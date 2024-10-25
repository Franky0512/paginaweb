function submitForm(event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

    // Obtén los valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Aquí puedes agregar la lógica para enviar el formulario, como una llamada a una API
    // Por ahora, solo mostraremos un mensaje de confirmación

    const responseMessage = document.getElementById('response-message');
    responseMessage.innerHTML = `Gracias, ${name}. Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.`;
    
    // Limpiar el formulario
    document.getElementById('contact-form').reset();
}
