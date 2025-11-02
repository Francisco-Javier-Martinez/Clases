export class Usuario{
    nombre;
    edad;
    telefono;
    libroPrestados;
    constructor(){
        this.nombre="";
        this.edad=0;
        this.telefono=0;
        this.libroPrestados=[];
    }

    set meterNombre(_nombre){
        this.nombre=_nombre;
    }
    set meterEdad(_edad){
        this.edad=_edad;
    }
    set meterTelefono(_telefono){
        this.telefono=_telefono;
    }
    
    agregarLibroPrestado(lirbo){
        this.libroPrestados.push(lirbo);
    }

    quitarPrestamos(lirbo){
        const indice= this.libroPrestados.indexOf(lirbo)
        if(indice!=-1){
            this.libroPrestados.splice(indice,1);
            return true;
        }else{
            console.log("El libro: "+lirbo.titulo+" no lo tiene prestado "+this.nombre);
            return false;
        }
    }
    monstrarLibrosPrestados(){
        console.log("Libros prestados de "+this.nombre+": ");
        if(this.libroPrestados.length==0){
            console.log("No hay libro prestado");
        }else{
            this.libroPrestados.forEach(element => {
                console.log("Libro: "+element.titulo);
            });
        }
    }
}