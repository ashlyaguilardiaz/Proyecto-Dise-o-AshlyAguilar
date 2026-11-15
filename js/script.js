document.addEventListener("DOMContentLoaded", function() {
const boton = document.getElementById("comprobar");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function() {

const respuesta = document.querySelector(
'input[name="respuesta"]:checked'
);

if (respuesta === null) {
mensaje.textContent = "Selecciona una respuesta primero.";
}

else if (respuesta.value === "correcta") {
mensaje.textContent = "¡Correcto! Has descubierto el secreto de Montree. ";
}

else {
mensaje.textContent = "¡Inténtalo de nuevo!  ";
}

});

});g