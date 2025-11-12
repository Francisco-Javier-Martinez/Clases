import { Guerrero } from "../personajesEspeciales/guerrero.js";

export class Espadachin extends Guerrero{
    #rangoDeNobleza;

    constructor(nombrePersonaje,edad,live,casaPerteneciente,arma,velo,rango){
        super(nombrePersonaje,edad,live,casaPerteneciente,arma,velo);
        this.#rangoDeNobleza= rango || "";
    }

    set rangoDeNobleza(rango){
        this.#rangoDeNobleza=rango;
    }


    presentarseEspadachin(){
        console.log("Soy "+this.nombrePersonaje+" pertenezco a la casa "+this.casaPerteneciente.nombreCasa+" mi rango de vision es: "+this.#rangoDeNobleza);
    }

    
    get rangoDeNobleza(){
        return this.#rangoDeNobleza;
    }
}