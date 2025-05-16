function guardar(){
    var titulo = document.getElementById("Titulo").value;
    var ingredientes = document.getElementById("Ingredientes").value;
    var pasos = document.getElementById("Paso").value;

    var taskList = document.getElementById("taskList");
    var row = document.createElement("tr");
    row.innerHTML = "<td>" + titulo + "</td><td>" + ingredientes + "</td><td>" + pasos + "</td>";
    taskList.appendChild(row);

}   