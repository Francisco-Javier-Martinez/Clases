export class Biblioteca{
    listaLibros;
    listaUsuarios;

    constructor(){
        this.listaLibros=[];
        this.listaUsuarios=[];
    }

    meterLibros(libro){
        this.listaLibros.push(libro);
    }
    meterUsuario(usu){
        this.listaUsuarios.push(usu);
    }
    
    monstrarRegistroLibros(){
        if(this.listaLibros.length==0){
            console.log("No hay libros");
        }else{
            this.listaLibros.forEach(element => {
                console.log("Titulo: "+element.titulo+" Autor: "+element.autor+" Diponibilidad: "+element.disponible);
            });
        }
    }
    monstrarRegistroUsuario(){
        if(this.listaUsuarios.length==0){
            console.log("No hay usuaios");
        }else{
            this.listaUsuarios.forEach(element => {
                console.log("Nombre: "+element.nombre);
            });
        }
    }
}
