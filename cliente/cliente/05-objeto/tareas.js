
let agenda={
    nombre: "Agenda 2025",
    tareas: []
};

let menu = 0;

while(menu != 6){
    do {
        menu = parseInt(prompt("1. Añadir 2. Marcar completada 3. Eliminar 4. Listar Pendiente 5. Ordenar 6. Salir"));
    } while (menu<1 || menu>6);
    switch(menu){
        case 1:
            let descrip = prompt("Descripción: ");
            let prioridad;
            do{
                prioridad = parseInt(prompt("Prioridad: 1 = alta, 2 = media, 3 = baja"));
            } while(prioridad < 1 || prioridad > 3);
            agregarTarea(descrip, prioridad);
            listarTarea(agenda.tareas);
            break;

        case 2:
            let indice = parseInt(prompt("Índice a marcar completada: "));
            marcarCompletada(indice);
            listarTarea(agenda.tareas);
            break;

        case 3:
            let indiceB = parseInt(prompt("Índice a eliminar: "));
            eliminarTarea(indiceB);
            listarTarea(agenda.tareas);
            break;

        case 4:
            alert("Tareas pendientes:");
            listarPendiente(agenda.tareas);
            break;

        case 5:
            alert("Tareas ordenadas por prioridad:");
            ordenarPorPrioridad(agenda.tareas);
            listarTarea(agenda.tareas);
            break;

        case 6:
            alert("Saliendo");
            break;

        default:
            alert("Opción no válida");
    }
}

/*^Funciones*/
function agregarTarea(descripcion,pioridad){
    let tarea={
        descripcion: descripcion,
        prioridad: pioridad,
        estado:"pendiente"
    };
    agenda.tareas.push(tarea);
}


function listarTarea (tareas){
    tareas.forEach((indice, numTarea) => {
        alert(numTarea + " : " + indice.descripcion + " Prioridad: " + indice.prioridad + " Estado: " + indice.estado);
    });
}

function marcarCompletada(indice){
    if(agenda.tareas.length==0){
        alert("Esta vacio no hay tareas registradas");
    }else if(indice >= 0 && indice < agenda.tareas.length) {
        agenda.tareas[indice].estado = "completada";
    } else {
        alert("No has metido indice significa que no acabaste o ese indice no existe");
    }
}


function eliminarTarea(indice){
    if(agenda.tareas.length==0){
        alert("Esta vacio no hay tareas registradas");
    }else if(indice >= 0 && indice < agenda.tareas.length) {
        agenda.tareas.splice(indice, 1);
    } else {
        alert("Índice no válido");
    }
}

function listarPendiente(tareas){
        if(agenda.tareas.length==0){
            alert("Esta vacio no hay tareas registradas");
        }else{
            tareas.forEach((indice, numTarea) => {
                if(indice.estado =="pendiente"){
                alert(numTarea + " : " + indice.descripcion + " Prioridad: " + indice.prioridad + " Estado: " + indice.estado);
            }else{
                alert("No tienes tareas pendiente");
            }
        }
    );}
}

function ordenarPorPrioridad(tareas){
    tareas.sort((a, b) => a.prioridad - b.prioridad);
}


