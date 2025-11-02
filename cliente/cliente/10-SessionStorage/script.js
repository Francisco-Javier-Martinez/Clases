/*
// Guardar datos en sessionStorage
sessionStorage.setItem("usuario", "María");
sessionStorage.setItem("rol", "administradora");

// Recuperar datos
const usuario = sessionStorage.getItem("usuario");
const rol = sessionStorage.getItem("rol");

console.log(`Usuario actual: ${usuario} (${rol})`);

// Eliminar una clave
sessionStorage.removeItem("rol");

// Comprobar cuántos elementos quedan
console.log("Elementos guardados:", sessionStorage.length);

// Borrar todo el almacenamiento
sessionStorage.clear();


// Crear un objeto con datos de sesión
const sesion = {
  usuario: "Carlos",
  inicio: new Date().toLocaleTimeString(),
  permisos: ["leer", "escribir"]
};

// Convertirlo a texto JSON y guardarlo
sessionStorage.setItem("sesion", JSON.stringify(sesion));

// Recuperarlo y convertirlo de nuevo a objeto
const sesionGuardada = JSON.parse(sessionStorage.getItem("sesion"));

console.log("Sesión activa:", sesionGuardada.usuario);
console.log("Permisos:", sesionGuardada.permisos.join(", "));
*/

/*********************************************************************************************************
 * 
 *  EJERCICIO PARA PRACTICAR 
 *  1. Crea un formulario con un campo para el nombre del usuario.2
 *  2. Cuando el usuario escriba su nombre y pulse un botón, guarda el nombre en sessionStorage.
 *  3. Al recargar la página, muestra un mensaje tipo:
 *      Bienvenido de nuevo, [nombre]", si el dato existe en sessionStorage.
 *  4. Añade un botón “Cerrar sesión” que elimine los datos de sessionStorage.
 *  
 *  (Este ejercicio no requiere todavía manipular el DOM a fondo; puedes hacerlo con prompt() y alert()
 * 
 *********************************************************************************************************/

//He decido usar la op de promnt y alert
//1
let nombre;
if(sessionStorage.length==0){
    nombre=prompt("Nombre: ");
    //2
sessionStorage.setItem("usuario",nombre);
}else{
    //3
    const usuario = sessionStorage.getItem("usuario");
    alert("Bienvenido de nuevo, "+usuario+" si el dato existe en ssesionStorage");
    
    //4
    let sn=prompt("Quieres borrar(s) o no(n)");
    if(sn=="n"){
        alert("Has decidido no borrar");
    }else if(sn=="s"){
        sessionStorage.clear(); 
    }else{
        alert("Error no has seleccionado s o n");
    }
}



/* cuando lo guardo y le doy a que no quiero borrar puedo ver que en mi locateStorage 
se guarda el nombre que introduje por promnt pero si le digo que me lo borre se borra
del localStorague esto es gracias al sessionStorage.clear() que  me permite borrar el
historial del localStorague*/