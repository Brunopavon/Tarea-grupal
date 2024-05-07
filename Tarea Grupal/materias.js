let materias = [];

function agregarMateria() {
    const id = document.getElementById("MATEID").value;
    const carrera = document.getElementById("CARRERAID").value;
    const idDocente = document.getElementById("DOCEID").value;
    const nombreMateria = document.getElementById("MATE_NAME").value;
    const codigo = document.getElementById("MATE_CODI").value;
    const anho = document.getElementById("MATE_ANHO").value;

    materias.push({ id, carrera, idDocente, nombreMateria, codigo, anho });

    limpiarCampos();
    actualizarTabla();
}

function modificarMateria() {
    const idAModificar = prompt("Ingrese el ID de la materia a modificar:");
    const nuevoNombre = prompt("Ingrese el nuevo nombre de la materia:");
    const nuevoCodigo = prompt("Ingrese el nuevo código de la materia:");

    const materia = materias.find(item => item.id === idAModificar);
    if (materia) {
        materia.nombreMateria = nuevoNombre;
        materia.codigo = nuevoCodigo;
        actualizarTabla();
        console.log("Materia modificada correctamente.");
    } else {
        console.log("Materia no encontrada.");
    }
}

function eliminarMateria() {
    const idAEliminar = prompt("Ingrese el ID de la materia a eliminar:");

    materias = materias.filter(item => item.id !== idAEliminar);
    console.log("Materia eliminada correctamente.");
    actualizarTabla();
}

function visualizarMaterias() {
    actualizarTabla();
}

function cargarDatos() {
    // Aquí podrías cargar datos desde una fuente externa
    // Por ejemplo:
    materias = [
        { id: "1", carrera: "Ingeniería Informática", idDocente: "1", nombreMateria: "Programación", codigo: "INF101", anho: "2022" },
        { id: "2", carrera: "Ingeniería Informática", idDocente: "2", nombreMateria: "Bases de Datos", codigo: "INF102", anho: "2022" }
    ];
    actualizarTabla();
}

function actualizarTabla() {
    const lista = document.getElementById("Lista");
    lista.innerHTML = "";

    materias.forEach(function (materia) {
        const fila = document.createElement("tr");
        fila.innerHTML = `<td>${materia.id}</td><td>${materia.carrera}</td><td>${materia.idDocente}</td><td>${materia.nombreMateria}</td><td>${materia.codigo}</td><td>${materia.anho}</td>`;
        lista.appendChild(fila);
    });
}

function limpiarCampos() {
    document.getElementById("MATEID").value = "";
    document.getElementById("CARRERAID").value = "";
    document.getElementById("DOCEID").value = "";
    document.getElementById("MATE_NAME").value = "";
    document.getElementById("MATE_CODI").value = "";
    document.getElementById("MATE_ANHO").value = "";
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("agregar").addEventListener("click", agregarMateria);
    document.getElementById("modificar").addEventListener("click", modificarMateria);
    document.getElementById("eliminar").addEventListener("click", eliminarMateria);
    document.getElementById("visualizar").addEventListener("click", visualizarMaterias);
    document.getElementById("carga").addEventListener("click", cargarDatos);
});