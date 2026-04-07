window.onload = function() {
    //this.alert("File API is ready to use!");
    var apiFile =(window.File && window.FileReader);
    if(!apiFile){
        alert("File API is not supported in this browser");
        return;
    }
    //this.alert("File API is supported in this browser");

    this.document.getElementById("archivos").addEventListener("change", sleccionarArchivo);
}

function sleccionarArchivo(event){

    var archivos = event.target;
    var total = 0;

    for (var i = 0; i < archivos.files.length; i++) {
        var archivo = archivos.files[i];
        var info = "Archivo: " + archivo.name + "\n";
        info += "Tamaño: " + archivo.size + " bytes\n";
        info += "Tipo: " + archivo.type + "\n";
        info += "Última modificación: " + archivo.lastModifiedDate + "\n";
        console.log(info);
        total += archivo.size;
        this.document.getElementById("informacionArchivos").innerHTML += "<li>" + archivo.name + " - " + archivo.size + " bytes</li>";
    }

    this.document.getElementById("informacionArchivos").innerHTML += "<p>Tamaño total: " + total + " bytes</p>";

}