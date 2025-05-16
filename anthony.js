function guardar(){
    var titulo = document.getElementById("titulo").value;
    var ingredientes = document.getElementById("ingredientes").value;
    var pasos = document.getElementById("pasos").value;

    var taskList = document.getElementById("taskList");
    var row = document.createElement("tr");
    row.innerHTML = "<td>" + titulo + "</td><td>" + ingredientes + "</td><td>" + pasos + "</td>";
    taskList.appendChild(row);

}   