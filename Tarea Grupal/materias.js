// Declaración de un array para almacenar materias
let materias = [];

// Función para agregar una materia al array
function agregarMateria() {
    // Obtener valores de los campos del formulario
    const id = document.getElementById("MATEID").value;
    const carrera = document.getElementById("CARRERAID").value;
    const idDocente = document.getElementById("DOCEID").value;
    const nombreMateria = document.getElementById("MATE_NAME").value;
    const codigo = document.getElementById("MATE_CODI").value;
    const anho = document.getElementById("MATE_ANHO").value;

    // Agregar la nueva materia al array
    materias.push({ id, carrera, idDocente, nombreMateria, codigo, anho });

    // Guardar en el almacenamiento local
    guardarEnLocalStorage();
    // Limpiar los campos del formulario
    limpiarCampos();
    // Actualizar la tabla con la lista de materias
    actualizarTabla();
}

// Función para modificar una materia existente
function modificarMateria() {
    // Solicitar al usuario el ID de la materia a modificar y los nuevos valores
    const idAModificar = prompt("Ingrese el ID de la materia a modificar:");
    const nuevoNombre = prompt("Ingrese el nuevo nombre de la materia:");
    const nuevoCodigo = prompt("Ingrese el nuevo código de la materia:");

    // Buscar la materia a modificar en el array
    const materia = materias.find(item => item.id === idAModificar);
    if (materia) {
        // Actualizar los valores de la materia
        materia.nombreMateria = nuevoNombre;
        materia.codigo = nuevoCodigo;
        // Actualizar la tabla y el almacenamiento local
        actualizarTabla();
        guardarEnLocalStorage();
        console.log("Materia modificada correctamente.");
    } else {
        console.log("Materia no encontrada.");
    }
}

// Función para eliminar una materia existente
function eliminarMateria() {
    // Solicitar al usuario el ID de la materia a eliminar
    const idAEliminar = prompt("Ingrese el ID de la materia a eliminar:");

    // Filtrar el array para eliminar la materia con el ID proporcionado
    materias = materias.filter(item => item.id !== idAEliminar);
    console.log("Materia eliminada correctamente.");
    // Actualizar la tabla y el almacenamiento local
    actualizarTabla();
    guardarEnLocalStorage();
}

// Función para visualizar las materias en la tabla
function visualizarMaterias() {
    // Actualizar la tabla y el almacenamiento local
    actualizarTabla();
    guardarEnLocalStorage();
}

// Función para actualizar la tabla con la lista de materias
function actualizarTabla() {
    const lista = document.getElementById("Lista");
    lista.innerHTML = "";

    // Iterar sobre el array de materias y crear filas en la tabla
    materias.forEach(function (materia) {
        const fila = document.createElement("tr");
        // Insertar datos de la materia en la fila
        fila.innerHTML = `<td>${materia.id}</td><td>${materia.carrera}</td><td>${materia.idDocente}</td><td>${materia.nombreMateria}</td><td>${materia.codigo}</td><td>${materia.anho}</td>`;
        lista.appendChild(fila);
    });
}

// Función para limpiar los campos del formulario
function limpiarCampos() {
    document.getElementById("MATEID").value = "";
    document.getElementById("CARRERAID").value = "";
    document.getElementById("DOCEID").value = "";
    document.getElementById("MATE_NAME").value = "";
    document.getElementById("MATE_CODI").value = "";
    document.getElementById("MATE_ANHO").value = "";
}

// Función para guardar el array de materias en el almacenamiento local
function guardarEnLocalStorage() {
    localStorage.setItem("materias", JSON.stringify(materias));
}

// Evento que se dispara cuando el DOM está completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Obtener materias almacenadas en el almacenamiento local
    const storedMaterias = localStorage.getItem('materias');
    if (storedMaterias) {
        // Si hay materias almacenadas, cargarlas en el array y actualizar la tabla
        materias = JSON.parse(storedMaterias);
        actualizarTabla(); 
    }
    // Asignar eventos a los botones del formulario
    document.getElementById("agregar").addEventListener("click", agregarMateria);
    document.getElementById("modificar").addEventListener("click", modificarMateria);
    document.getElementById("eliminar").addEventListener("click", eliminarMateria);
    document.getElementById("visualizar").addEventListener("click", visualizarMaterias);
});
