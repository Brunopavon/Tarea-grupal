let datos = [];

function agregarElemento() {
    const id = document.getElementById("DOCEID").value;
    const apellido = document.getElementById("DOCE_APELLIDO").value;
    const nombre = document.getElementById("DOCE_NOMBRE").value;
    const email = document.getElementById("DOCE_EMAIL").value;
    const cumple = document.getElementById("DOCE_CUMPLE").value;
    const celular = document.getElementById("DOCE_CEL").value;

    datos.push({ id, apellido, nombre, email, cumple, celular });

    limpiarCampos();
    actualizarTabla();
}

function modificarElemento() {
    const idAModificar = prompt("Ingrese el ID del elemento a modificar:");
    const nuevoNombre = prompt("Ingrese el nuevo nombre:");
    const nuevoApellido = prompt("Ingrese el nuevo apellido:");

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

function eliminarElemento() {
    const idAEliminar = prompt("Ingrese el ID del elemento a eliminar:");

    datos = datos.filter(item => item.id !== idAEliminar);
    actualizarTabla();
    console.log("Elemento eliminado correctamente.");
}

function visualizarElementos() {
    actualizarTabla();
}

function cargarDatos() {
    // Aquí podrías cargar datos desde una fuente externa
    // Por ejemplo:
    datos = [
        { id: "1", apellido: "García", nombre: "Juan", email: "juan@example.com", cumple: "1990-01-01", celular: "123456789" },
        { id: "2", apellido: "López", nombre: "María", email: "maria@example.com", cumple: "1992-05-12", celular: "987654321" }
    ];
    actualizarTabla();
}

function actualizarTabla() {
    const lista = document.getElementById("Lista");
    lista.innerHTML = "";

    datos.forEach(function (item) {
        const fila = document.createElement("tr");
        fila.innerHTML = `<td>${item.id}</td><td>${item.apellido}</td><td>${item.nombre}</td><td>${item.email}</td><td>${item.cumple}</td><td>${item.celular}</td>`;
        lista.appendChild(fila);
    });
}

function limpiarCampos() {
    document.getElementById("DOCEID").value = "";
    document.getElementById("DOCE_APELLIDO").value = "";
    document.getElementById("DOCE_NOMBRE").value = "";
    document.getElementById("DOCE_EMAIL").value = "";
    document.getElementById("DOCE_CUMPLE").value = "";
    document.getElementById("DOCE_CEL").value = "";
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("agregar").addEventListener("click", agregarElemento);
    document.getElementById("modificar").addEventListener("click", modificarElemento);
    document.getElementById("eliminar").addEventListener("click", eliminarElemento);
    document.getElementById("visualizar").addEventListener("click", visualizarElementos);
    document.getElementById("carga").addEventListener("click", cargarDatos);
});