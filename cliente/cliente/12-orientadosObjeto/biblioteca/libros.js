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

    prestarLibro(libro){
        if(libro.disponible!=true){
            console.log("No esta disponible");
        }else{
            this.disponible=false;
        }
    }

    devolver(libro){
        if(libro.disponible==true){
            console.log("Este libro no esta reserbado");
        }else{
            libro.disponible=true;
        }
    }
}