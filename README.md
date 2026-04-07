# Este material corresponde a ejericicios de HTML, JS y CSS básicos

- Utiliza LocalStorage, para comprender su funcionamiento
- Tiene un ejericio para el manejo de carga de archivos File API
- Uso de Bootstrap


LocalStorage y sessionStorage
-● Se utilizan en lugar de las cookies
-● localStorage son datos persistentes
-● sessionStorage no son persistentes


LocalStorage y sessionStorage
-● localStorage es más seguro, almacena más información y no afecta el desempeño del navegador.
-● Soporta 5Mb de almacenamiento y no envía información al servidor.

## 🔹 1. ¿Qué es localStorage?

Es un almacenamiento en el navegador que:

Guarda datos en formato clave → valor
No se borra al recargar la página
Solo acepta strings

👉 Por eso usas:

JSON.stringify()
JSON.parse()

🔹 2. Inicialización de datos
let libros = JSON.parse(localStorage.getItem("libros")) || [];
¿Qué pasa aquí?
Busca en el navegador la clave "libros"
Si existe → la convierte de texto a objeto
Si NO existe → usa un array vacío []

👉 Esto permite que los datos persistan entre recargas.

🔹 3. Guardar en localStorage
function guardarStorage() {
    localStorage.setItem("libros", JSON.stringify(libros));
}
Clave del funcionamiento:
libros es un array de objetos
Se convierte a texto con JSON.stringify
Se guarda con la clave "libros"

📌 Ejemplo de lo que realmente se guarda:

[
  {
    "titulo": "El Caballero de la armadura",
    "autor": "Cervantes",
    "editorial": "Ohmega",
    "anio": "1990"
  }
]
🔹 4. Agregar libros
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

Flujo:
Se captura el formulario
Se crea un objeto nuevoLibro
Se agrega al array libros
Se guarda en localStorage
Se actualiza la vista

🔹 5. Listar libros (renderizado)
function listarLibros() {
Recorre el array libros
Genera HTML dinámico
Lo pinta en:
<div id="listaLibros"></div>

👉 Importante:
Cada vez que agregas, editas o eliminas → vuelves a renderizar

🔹 6. Eliminar libro
function eliminarLibro(index) {
    libros.splice(index, 1);
    guardarStorage();
    listarLibros();
}
Flujo:
Elimina del array
Actualiza localStorage
Refresca la tabla

🔹 7. Editar libro (modal)
Abrir modal:
function abrirModal(index) {
Carga los datos en inputs
Guarda el índice oculto

Guardar edición:
function guardarEdicion() {
    libros[index] = { ... };
    guardarStorage();
    listarLibros();
}

👉 Aquí reemplazas el objeto en el array y lo guardas otra vez

🔹 8. Funciones básicas de localStorage (ejemplo inicial)

Tu código también muestra lo básico:

localStorage.nombre = "valor";
localStorage.getItem("nombre");
localStorage.removeItem("nombre");

✔ Alternativa recomendada:

localStorage.setItem("nombre", "valor");

🔹 9. Flujo completo de la aplicación
Carga la página

Se ejecuta:

listarLibros();
Se leen datos desde localStorage
Se muestran en pantalla
Usuario:
Agrega → se guarda
Edita → se actualiza
Elimina → se borra

🔹 10. Problemas comunes (importante)

Según lo que muestras en la imagen, podrías tener:

❌ IDs no definidos automáticamente

Ejemplo:

titulo.value

👉 Esto solo funciona si el navegador expone el ID como variable global.

✔ Mejor usar:

document.getElementById("titulo").value

❌ Superposición visual (lo que se ve en tu imagen)

Probablemente por CSS del modal:

.modal {
    position: fixed;
    top: 0;
    left: 0;
}

✔ Solución:

.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
}
✅ Conclusión

Tu app implementa correctamente localStorage como una mini base de datos en el navegador:

Array en memoria → libros
Persistencia → localStorage
UI dinámica → listarLibros()

👉 Es básicamente un CRUD completo sin backend.