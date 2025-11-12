import { Guerrero } from "../personajesEspeciales/guerrero.js";

export class Arquero extends Guerrero{
    #rangoVision;

    constructor(nombrePersonaje,edad,live,casaPerteneciente,arma,velo,rangoVision){
        super(nombrePersonaje,edad,live,casaPerteneciente,arma,velo);
        this.#rangoVision= rangoVision || 0;
    }

    set rangoVision(rango){
        this.#rangoVision=rango;
    }


    presentarseArquero(){
        console.log("Soy "+this.nombrePersonaje+" pertenezco a la casa "+this.casaPerteneciente.nombreCasa+" mi rango de vision es: "+this.#rangoVision);
    }

    
    get rangoVision(){
        return this.#rangoVision;
    }
}