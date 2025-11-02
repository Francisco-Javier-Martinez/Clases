export class Libro{
    titulo;
    autor;
    disponible;
    constructor(){
        this.titulo="";
        this.autor="";
        this.disponible=true;
    }    

    set meterTitulo(_titulo){
        this.titulo=_titulo;
    }

    set meterAutor(persona){
        this.autor=persona;
    }

    monstrarInformacion(){
        console.log("Titulo: "+this.titulo+" Autor: "+this.autor+" Diponibilidad: "+this.disponible);
    }

    prestarLibro(){
        if(this.disponible == true){ 
            this.disponible = false;
            console.log("Libro prestado");
            return true; 
        } else {
            console.log("No esta disponible");
            return false;
        }
    }
    devolver(){
        if(this.disponible==false){ 
            this.disponible=true; 
            console.log("Libro devuelto");
            return true;
        }else{
            return false;
        }
    }
}