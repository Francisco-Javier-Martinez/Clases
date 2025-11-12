import { Guerrero } from "../guerrero.js";

export class Currandero extends Guerrero{
    #CapacidadCuracion;

    constructor(nombrePersonaje,edad,live,casaPerteneciente,arma,capacidadCuracion){
        // Pasamos el arma al constructor de Guerrero
        super(nombrePersonaje,edad,live,casaPerteneciente,arma);
        this.#CapacidadCuracion=capacidadCuracion||0;
    }

    set meterCapacidadCuracion(capacidad){
        this.#CapacidadCuracion=capacidad;
    }
    
    curar(objetivo){
        if(!(objetivo instanceof Guerrero)){
            console.log("Error: Solo se pueden curar instancias de Guerrero");
        }else{
            console.log(this.nombrePersonaje+" cura a "+ objetivo.nombrePersonaje+" restaurando "+this.#CapacidadCuracion+" puntos de vida.");
            objetivo.vida += this.#CapacidadCuracion;
            console.log("Vida actual de "+objetivo.nombrePersonaje+": "+objetivo.vida);
        }
    }
    
    get capacidadCuracion(){
        return this.#CapacidadCuracion;
    }

}