// Array para almacenar los datos de las materias
let materias = [];

// Función para agregar una nueva materia
function agregarMateria() {
    const id = document.getElementById("MATEID").value;
    const carrera = document.getElementById("CARRERAID").value;
    const idDocente = document.getElementById("DOCEID").value;
    const nombreMateria = document.getElementById("MATE_NAME").value;
    const codigo = document.getElementById("MATE_CODI").value;
    const anho = document.getElementById("MATE_ANHO").value;

    // Agregar los datos al array de materias
    materias.push({ id, carrera, idDocente, nombreMateria, codigo, anho });

    // Limpiar los campos de entrada
    limpiarCampos();

    // Actualizar la tabla
    actualizarTabla();
}

// Función para modificar una materia existente
function modificarMateria() {
    const idAModificar = prompt("Ingrese el ID de la materia a modificar:");
    const nuevoNombre = prompt("Ingrese el nuevo nombre de la materia:");
    const nuevoCodigo = prompt("Ingrese el nuevo código de la materia:");

    // Buscar la materia en el array y modificar sus datos
    const materia = materias.find(item => item.id === idAModificar);
    if (materia) {
        materia.nombreMateria = nuevoNombre;
        materia.codigo = nuevoCodigo;
        console.log("Materia modificada correctamente.");
    } else {
        console.log("Materia no encontrada.");
    }
    actualizarTabla();
}

// Función para eliminar una materia existente
function eliminarMateria() {
    const idAEliminar = prompt("Ingrese el ID de la materia a eliminar:");

    // Filtrar el array para eliminar la materia con el ID especificado
    materias = materias.filter(item => item.id !== idAEliminar);
    console.log("Materia eliminada correctamente.");
    actualizarTabla();
}

// Función para visualizar las materias
function visualizarMaterias() {
    actualizarTabla();
}

// Función para cargar los datos
function cargarDatos() {
    // Aquí puedes cargar los datos desde una fuente externa, como una base de datos o un archivo JSON
    // Por ejemplo:
    materias = [
        { id: "1", carrera: "Ingeniería Informática", idDocente: "1", nombreMateria: "Programación", codigo: "INF101", anho: "2022" },
        { id: "2", carrera: "Ingeniería Informática", idDocente: "2", nombreMateria: "Bases de Datos", codigo: "INF102", anho: "2022" }
    ];
    actualizarTabla();
}

// Función para mostrar los datos en la tabla
function actualizarTabla() {
    const lista = document.getElementById("Lista");
    lista.innerHTML = "";

    materias.forEach(function (materia) {
        const fila = document.createElement("tr");
        fila.innerHTML = `<td>${materia.id}</td><td>${materia.carrera}</td><td>${materia.idDocente}</td><td>${materia.nombreMateria}</td><td>${materia.codigo}</td><td>${materia.anho}</td>`;
        lista.appendChild(fila);
    });
}

// Función para limpiar los campos de entrada
function limpiarCampos() {
    document.getElementById("MATEID").value = "";
    document.getElementById("CARRERAID").value = "";
    document.getElementById("DOCEID").value = "";
    document.getElementById("MATE_NAME").value = "";
    document.getElementById("MATE_CODI").value = "";
    document.getElementById("MATE_ANHO").value = "";
}

// Función para cargar los eventos
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("agregar").addEventListener("click", agregarMateria);
    document.getElementById("modificar").addEventListener("click", modificarMateria);
    document.getElementById("eliminar").addEventListener("click", eliminarMateria);
    document.getElementById("visualizar").addEventListener("click", visualizarMaterias);
    document.getElementById("carga").addEventListener("click", cargarDatos);
});