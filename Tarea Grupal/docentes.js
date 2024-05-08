// Declaración de un array para almacenar datos
let datos = [];

// Función para agregar un elemento al array
function agregarElemento() {
    // Obtener valores de los campos del formulario
    const id = document.getElementById("DOCEID").value;
    const apellido = document.getElementById("DOCE_APELLIDO").value;
    const nombre = document.getElementById("DOCE_NOMBRE").value;
    const email = document.getElementById("DOCE_EMAIL").value;
    const cumple = document.getElementById("DOCE_CUMPLE").value;
    const celular = document.getElementById("DOCE_CEL").value;

    // Agregar el nuevo elemento al array
    datos.push({ id, apellido, nombre, email, cumple, celular });
    // Guardar en el almacenamiento local
    guardarEnLocalStorage();
    // Limpiar los campos del formulario
    limpiarCampos();
    // Actualizar la tabla con la lista de elementos
    actualizarTabla();
}

// Función para modificar un elemento existente
function modificarElemento() {
    // Solicitar al usuario el ID del elemento a modificar y los nuevos valores
    const idAModificar = prompt("Ingrese el ID del elemento a modificar:");
    const nuevoNombre = prompt("Ingrese el nuevo nombre:");
    const nuevoApellido = prompt("Ingrese el nuevo apellido:");

    // Buscar el elemento a modificar en el array
    const elemento = datos.find(item => item.id === idAModificar);
    if (elemento) {
        // Actualizar los valores del elemento
        elemento.nombre = nuevoNombre;
        elemento.apellido = nuevoApellido;
        // Actualizar la tabla y el almacenamiento local
        actualizarTabla();
        guardarEnLocalStorage();
        console.log("Elemento modificado correctamente.");
    } else {
        console.log("Elemento no encontrado.");
    }
}

// Función para eliminar un elemento existente
function eliminarElemento() {
    // Solicitar al usuario el ID del elemento a eliminar
    const idAEliminar = prompt("Ingrese el ID del elemento a eliminar:");

    // Filtrar el array para eliminar el elemento con el ID proporcionado
    datos = datos.filter(item => item.id !== idAEliminar);
    // Actualizar la tabla y el almacenamiento local
    actualizarTabla();
    guardarEnLocalStorage();
    console.log("Elemento eliminado correctamente.");
}

// Función para visualizar los elementos en la tabla
function visualizarElementos() {
    // Actualizar la tabla y el almacenamiento local
    actualizarTabla();
    guardarEnLocalStorage();
}

// Función para actualizar la tabla con la lista de elementos
function actualizarTabla() {
    const lista = document.getElementById("Lista");
    lista.innerHTML = "";

    // Iterar sobre el array de datos y crear filas en la tabla
    datos.forEach(function (item) {
        const fila = document.createElement("tr");
        // Insertar datos del elemento en la fila
        fila.innerHTML = `<td>${item.id}</td><td>${item.apellido}</td><td>${item.nombre}</td><td>${item.email}</td><td>${item.cumple}</td><td>${item.celular}</td>`;
        lista.appendChild(fila);
    });
}

// Función para limpiar los campos del formulario
function limpiarCampos() {
    document.getElementById("DOCEID").value = "";
    document.getElementById("DOCE_APELLIDO").value = "";
    document.getElementById("DOCE_NOMBRE").value = "";
    document.getElementById("DOCE_EMAIL").value = "";
    document.getElementById("DOCE_CUMPLE").value = "";
    document.getElementById("DOCE_CEL").value = "";
}

// Función para guardar el array de datos en el almacenamiento local
function guardarEnLocalStorage() {
    localStorage.setItem('datos', JSON.stringify(datos));
}

// Evento que se dispara cuando el DOM está completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Obtener datos almacenados en el almacenamiento local
    const storedDatos = localStorage.getItem('datos');
    if (storedDatos) {
        // Si hay datos almacenados, cargarlos en el array y actualizar la tabla
        datos = JSON.parse(storedDatos);
        actualizarTabla(); 
    }

    // Asignar eventos a los botones del formulario
    document.getElementById("agregar").addEventListener("click", agregarElemento);
    document.getElementById("modificar").addEventListener("click", modificarElemento);
    document.getElementById("eliminar").addEventListener("click", eliminarElemento);
    document.getElementById("visualizar").addEventListener("click", visualizarElementos);
    document.getElementById("carga").addEventListener("click", cargarDatos);
});
