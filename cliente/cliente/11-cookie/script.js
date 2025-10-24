let nombre = prompt("Nombre: ");
let diaExpirar = parseInt(prompt("Día de expiración (número): "));
let fechaExpira = new Date(2025, 9, diaExpirar);
document.cookie = `usuario=${nombre}; expires=${fechaExpira.toUTCString()}; path=/`;
 

let op=0;
let sn;
while(op!=3){
    op=parseInt(prompt("1.Visualizar cooki 2.Borrar cooki 3.Salir"));
    switch(op){
        case 1:
            sn=leer("usuario");
            if(sn){
                alert("Bienvenido " + sn + ", tienes la sesión iniciada y acaba el día " + fechaExpira);
            }else{
                alert("No hay sesion iniciada");
            }
            break;
        case 2:
            borrar("usuario");
            break
        case 3:
            alert("Salir..... ");
            break;
        default:
            alert("Del 1-3 :(");
    }
}
function leer(nombre){
    const cookies = document.cookie.split("; ");
            for (let cookie of cookies) {
                const [clave, valor] = cookie.split("=");
                if (clave === nombre) return valor;
            }
            return null;
}
function borrar(nombre){
    document.cookie = `${nombre}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    alert("Cookie eliminada");
}