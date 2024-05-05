// Array para almacenar los datos
let datos = [];

// Función para agregar un nuevo elemento
function agregarElemento() {
    const id = document.getElementById("DOCEID").value;
    const apellido = document.getElementById("DOCE_APELLIDO").value;
    const nombre = document.getElementById("DOCE_NOMBRE").value;
    const email = document.getElementById("DOCE_EMAIL").value;
    const cumple = document.getElementById("DOCE_CUMPLE").value;
    const celular = document.getElementById("DOCE_CEL").value;

    // Agregar los datos al array
    datos.push({ id, apellido, nombre, email, cumple, celular });

    // Limpiar los campos de entrada
    limpiarCampos();

    // Actualizar la tabla
    actualizarTabla();
}

// Función para mostrar los datos en la tabla
function actualizarTabla() {
    const lista = document.getElementById("Lista");
    lista.innerHTML = "";

    datos.forEach(function (item) {
        const fila = document.createElement("tr");
        fila.innerHTML = `<td>${item.id}</td><td>${item.apellido}</td><td>${item.nombre}</td><td>${item.email}</td><td>${item.cumple}</td><td>${item.celular}</td>`;
        lista.appendChild(fila);
    });
}

// Función para limpiar los campos de entrada
function limpiarCampos() {
    document.getElementById("DOCEID").value = "";
    document.getElementById("DOCE_APELLIDO").value = "";
    document.getElementById("DOCE_NOMBRE").value = "";
    document.getElementById("DOCE_EMAIL").value = "";
    document.getElementById("DOCE_CUMPLE").value = "";
    document.getElementById("DOCE_CEL").value = "";
}

// Función para modificar un elemento existente
function modificarElemento() {
    const idAModificar = prompt("Ingrese el ID del elemento a modificar:");
    const nuevoNombre = prompt("Ingrese el nuevo nombre:");
    const nuevoApellido = prompt("Ingrese el nuevo apellido:");

    // Buscar el elemento en el array y modificar sus datos
    const elemento = datos.find(item => item.id === idAModificar);
    if (elemento) {
        elemento.nombre = nuevoNombre;
        elemento.apellido = nuevoApellido;
        actualizarTabla();
        console.log("Elemento modificado correctamente.");
    } else {
        console.log("Elemento no encontrado.");
    }
}

// Función para eliminar un elemento existente
function eliminarElemento() {
    const idAEliminar = prompt("Ingrese el ID del elemento a eliminar:");

    // Filtrar el array para eliminar el elemento con el ID especificado
    datos = datos.filter(item => item.id !== idAEliminar);
    actualizarTabla();
    console.log("Elemento eliminado correctamente.");
}

// Función para visualizar elementos
function visualizarElementos() {
    actualizarTabla();
}

// Función para cargar los eventos
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("agregar").addEventListener("click", agregarElemento);
    document.getElementById("modificar").addEventListener("click", modificarElemento);
    document.getElementById("eliminar").addEventListener("click", eliminarElemento);
    document.getElementById("visualizar").addEventListener("click", visualizarElementos);
});