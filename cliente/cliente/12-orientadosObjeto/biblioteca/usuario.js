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
}