import { Personaje } from "../personaje.js";
export class Rey extends Personaje{
    #anoReinados;

    constructor(){
        super();
        this.#anoReinados=0;
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

    getRey(){
        return this.#anoReinados;
    }

    
}