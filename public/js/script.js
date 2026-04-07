window.onload = function() {
    if(typeof(Storage) !== "undefined") {
        //this.alert("Bienvenido a la aplicación de localStorage");
    } else {
        this.alert("Debe actualizar su navegador para usar esta aplicación");
    }
}

function guardarDatos() {
    localStorage.nombre = document.getElementById("nombre").value;
    localStorage.clave = document.getElementById("clave").value;

    alert("Datos guardados en localStorage");
}

function recuperarDatos() {
    if((localStorage.nombre != undefined) && (localStorage.clave != undefined)) {
        document.getElementById("salida").innerHTML = "Nombre: " + localStorage.nombre + "<br>Clave: " + localStorage.clave;
        document.getElementById("nombre").value = localStorage.nombre;
        document.getElementById("clave").value = localStorage.clave;
    } else {
        alert("No hay datos guardados en localStorage");
        document.getElementById("salida").innerHTML = "No hay datos guardados en localStorage";
    }
}

function eliminarDatos() {
    localStorage.removeItem("nombre");
    localStorage.removeItem("clave");
    alert("Datos eliminados de localStorage");
}


//Libros
let libros = JSON.parse(localStorage.getItem("libros")) || [];

const form = document.getElementById("formLibro");
const listaLibros = document.getElementById("listaLibros");

// =======================
// LISTAR
// =======================
function listarLibros() {

    if (libros.length === 0) {
        listaLibros.innerHTML = "<p>No hay libros</p>";
        return;
    }

    let html = `
        <table>
            <tr>
                <th>Título</th>
                <th>Autor</th>
                <th>Editorial</th>
                <th>Año</th>
                <th>Acciones</th>
            </tr>
    `;

    libros.forEach((libro, index) => {
        html += `
            <tr>
                <td>${libro.titulo}</td>
                <td>${libro.autor}</td>
                <td>${libro.editorial}</td>
                <td>${libro.anio}</td>
                <td>
                    <button onclick="abrirModal(${index})">Editar</button>
                    <button onclick="eliminarLibro(${index})">Eliminar</button>
                </td>
            </tr>
        `;
    });

    html += "</table>";

    listaLibros.innerHTML = html;
}

// =======================
// AGREGAR
// =======================
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nuevoLibro = {
        titulo: titulo.value.trim(),
        autor: autor.value.trim(),
        editorial: editorial.value.trim(),
        anio: anio.value.trim()
    };

    libros.push(nuevoLibro);
    guardarStorage();
    listarLibros();

    form.reset();
});

// =======================
// ELIMINAR
// =======================
function eliminarLibro(index) {
    if (!confirm("¿Eliminar libro " + libros[index].titulo + "?")) return;

    libros.splice(index, 1);
    guardarStorage();
    listarLibros();
}

// =======================
// MODAL
// =======================
function abrirModal(index) {

    const libro = libros[index];

    editIndex.value = index;
    editTitulo.value = libro.titulo;
    editAutor.value = libro.autor;
    editEditorial.value = libro.editorial;
    editAnio.value = libro.anio;

    document.getElementById("modalEditar").style.display = "block";
}

function cerrarModal() {
    document.getElementById("modalEditar").style.display = "none";
}

// =======================
// GUARDAR EDICIÓN
// =======================
function guardarEdicion() {

    const index = editIndex.value;

    libros[index] = {
        titulo: editTitulo.value,
        autor: editAutor.value,
        editorial: editEditorial.value,
        anio: editAnio.value
    };

    guardarStorage();
    listarLibros();
    cerrarModal();
}

// =======================
// STORAGE
// =======================
function guardarStorage() {
    localStorage.setItem("libros", JSON.stringify(libros));
}

// =======================
listarLibros();