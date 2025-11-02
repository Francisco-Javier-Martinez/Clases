let usuario = leer("visita");

if(!usuario) {
    let nombre=prompt("Introduce tu nombre:");
    if(nombre){
        nombre=nombre.trim();
        let fechaExpira = new Date();
        fechaExpira.setDate(fechaExpira.getDate()+7);
        document.cookie = `visita=${encodeURIComponent(nombre)}; expires=${fechaExpira.toUTCString()}; path=/`;
        alert("Bienvenido, " + nombre);
    }else{
        alert("No se creó la cookie");
    }
}else{
    alert("Bienvenido de nuevo, " + usuario );

    if(confirm("¿Quieres borrar la cookie?")) {
        borrar("visita");
    }else{
        alert("Has decidido que no");
    }
}

function leer(nombre) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        const [clave, valor] = cookie.split("=");
        if (clave === nombre) return decodeURIComponent(valor);
    }
    return null;
}

function borrar(nombre) {
    document.cookie = `${nombre}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    alert("Cookie eliminada");
}
