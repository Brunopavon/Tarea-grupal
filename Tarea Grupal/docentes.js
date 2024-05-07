let datos = [];

function agregarElemento() {
    const id = document.getElementById("DOCEID").value;
    const apellido = document.getElementById("DOCE_APELLIDO").value;
    const nombre = document.getElementById("DOCE_NOMBRE").value;
    const email = document.getElementById("DOCE_EMAIL").value;
    const cumple = document.getElementById("DOCE_CUMPLE").value;
    const celular = document.getElementById("DOCE_CEL").value;

    datos.push({ id, apellido, nombre, email, cumple, celular });
    guardarEnLocalStorage();
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
        guardarEnLocalStorage();
        console.log("Elemento modificado correctamente.");
    } else {
        console.log("Elemento no encontrado.");
    }
}

function eliminarElemento() {
    const idAEliminar = prompt("Ingrese el ID del elemento a eliminar:");

    datos = datos.filter(item => item.id !== idAEliminar);
    actualizarTabla();
    guardarEnLocalStorage();
    console.log("Elemento eliminado correctamente.");
}

function visualizarElementos() {
    actualizarTabla();
    guardarEnLocalStorage();
}


function cargarDatos() {
    // Cargar datos de ejemplo si no hay datos en localStorage
    if (!localStorage.getItem('datos')) {
        datos = [
            { id: "1", apellido: "undefined ", nombre: "undefined", email: "undefined", cumpleaños: "undefined", celular: "undefined" },
            { id: "2", apellido: "undefined ", nombre: "undefined", email: "undefined", cumpleaños: "undefined", celular: "undefined" },
        ];
            
        guardarEnLocalStorage();
        actualizarTabla();
    }
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

function guardarEnLocalStorage() {
    localStorage.setItem('datos', JSON.stringify(datos));
}

document.addEventListener("DOMContentLoaded", function () {

    const storedDatos = localStorage.getItem('datos');
     if (storedDatos) {
         datos = JSON.parse(storedDatos);
         actualizarTabla(); 
         
     }

    document.getElementById("agregar").addEventListener("click", agregarElemento);
    document.getElementById("modificar").addEventListener("click", modificarElemento);
    document.getElementById("eliminar").addEventListener("click", eliminarElemento);
    document.getElementById("visualizar").addEventListener("click", visualizarElementos);
    document.getElementById("carga").addEventListener("click", cargarDatos);
});
