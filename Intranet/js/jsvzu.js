// Obtener el modal
var modal = document.getElementById("miModal");
// Obtener el botón que abre el modal
var btn = document.getElementById("abrirModal");
// Obtener el elemento <span> que cierra el modal
var span = document.getElementsByClassName("cerrar")[0];
// Cuando el usuario hace clic en el botón, se abre el modal
btn.onclick = function() {
    modal.style.display = "block";
}
// Cuando el usuario hace clic en <span> (x), se cierra el modal
span.onclick = function() {
    modal.style.display = "none";
}
// Cuando el usuario hace clic en cualquier parte fuera del modal, también se cierra
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function cerrarModal(){
    modal.style.display = "none";
}




// Obtener informacion de formulario de crear Usuario
function guardarDatos() {
    // Obtener los valores del formulario
    const usuario = document.getElementById('Usuario').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const dni = document.getElementById('dni').value;
    const cargo = document.getElementById('cargo').value;
    const rango = document.getElementById('rango').value;
    const turno = document.getElementById('turno').value;
    const password = document.getElementById('password').value;
    const tipo = document.getElementById('tipo').value;
    const permisos = document.getElementById('permisos').value;

    // Crear un objeto con los datos
    const usuarioData = {
        usuario: usuario,
        dni: dni,
        nombre: nombre,
        apellido: apellido,
        cargo: cargo,
        rango: rango,
        turno: turno,
        password: password,
        tipo: tipo,
        permisos: permisos
    };

    // Llamar a la función que añade una fila a la tabla
    agregarFila(usuarioData);

    // Opcional: Cerrar el modal después de guardar los datos
    cerrarModal();
}

function agregarFila(usuarioData) {
    // Obtener la tabla por su ID
    const tabla = document.getElementById('tablaUsuarios').getElementsByTagName('tbody')[0];

    // Crear una nueva fila
    const nuevaFila = tabla.insertRow();

    // Insertar las celdas en la nueva fila
    const celdaSelecionador = nuevaFila.insertCell(0);
    const celdaUsuario = nuevaFila.insertCell(1);
    const celdaNombre = nuevaFila.insertCell(2);
    const celdaApellido = nuevaFila.insertCell(3);
    const celdaDNI = nuevaFila.insertCell(4);
    const celdaCargo = nuevaFila.insertCell(5);
    const celdaRango = nuevaFila.insertCell(6);
    const celdaEstado = nuevaFila.insertCell(7);
    const celdaAcciones = nuevaFila.insertCell(8);

    // Asignar los valores de usuarioData a cada celda
    celdaSelecionador.innerHTML = '<input type="checkbox">';
    celdaUsuario.textContent = usuarioData.usuario;
    celdaNombre.textContent = usuarioData.nombre;
    celdaApellido.textContent = usuarioData.apellido;
    celdaDNI.textContent = usuarioData.dni;
    celdaCargo.textContent = usuarioData.cargo;
    celdaRango.textContent = usuarioData.rango;
    celdaEstado.textContent = "Activo";

    // Añadir los botones de acción (editar, ver, eliminar)
    celdaAcciones.innerHTML = `
        <button class="action-btn edit">✏️</button>
        <button class="action-btn view">👁️</button>
        <button class="action-btn delete">🗑️</button>
    `;
}







function generarNombreUsuario() {
    // Obtén los valores de los campos de nombre y apellido
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();

    // Divide el nombre en partes (suponiendo que son nombres separados por espacio)
    const nombresArray = nombre.split(" ");
    const apellidosArray = apellido.split(" ");

    // Inicializar la variable para el nombre de usuario
    let nombreUsuario = "";

    // Obtener la primera letra del primer nombre
    if (nombresArray.length > 0) {
        nombreUsuario += nombresArray[0].charAt(0);
    }

    // Si tiene segundo nombre, añadir la primera letra
    if (nombresArray.length > 1) {
        nombreUsuario += nombresArray[1].charAt(0);
    }

    // Añadir el primer apellido completo
    if (apellidosArray.length > 0) {
        nombreUsuario += apellidosArray[0];
    }

    // Si tiene segundo apellido, añadir su primera letra
    if (apellidosArray.length > 1) {
        nombreUsuario += apellidosArray[1].charAt(0);
    }

    // Convertir el nombre de usuario a minúsculas
    nombreUsuario = nombreUsuario.toLowerCase();

    // Colocar el nombre de usuario en el campo correspondiente
    document.getElementById('Usuario').value = nombreUsuario;
}

// Asigna el evento 'focus' al campo de nombre de usuario
document.getElementById('Usuario').addEventListener('focus', generarNombreUsuario);
