import { Personaje } from "../personaje.js";
export class Rey extends Personaje{
    #anoReinados;

    constructor(nombrePersonaje,edad,live,casaPerteneciente,reinados){
        super(nombrePersonaje,edad,live,casaPerteneciente);
        this.#anoReinados=reinados||0;
    }

    set meterAnoReinado(anos){
        this.#anoReinados=anos;
    }

    luchar(){
        console.log("Alberto me dijo que escriba los que quiero");
    }

    gobernar(){
        console.log(this.getNombrePersonaje()+" gobierna con sabiduria desde hace "+this.#anoReinados);
    }

    get Rey(){
        return this.#anoReinados;
    }

    
}