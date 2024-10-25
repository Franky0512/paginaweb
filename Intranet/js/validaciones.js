function validarLogin(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    var username = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    
    // Puedes reemplazar esto con una validación real (como desde una base de datos)
    if (username === "admin" && password === "1234") {
        // Redirigir a la página principal si las credenciales son correctas
        window.location.href = "main.html";
    } else {
        // Mostrar un mensaje de error si las credenciales son incorrectas
        errorMessage.textContent = "Usuario o contraseña incorrectos. Intente de nuevo.";
    }
}