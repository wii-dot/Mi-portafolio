// script.js

// Mensaje de bienvenida en la consola
document.addEventListener("DOMContentLoaded", function () {
    console.log("Bienvenido al sitio web de Mi portafolio");
});

// Función para validar formulario de PQRS
function validarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || correo === "" || mensaje === "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    alert("Formulario enviado correctamente.");
    return true;
}
