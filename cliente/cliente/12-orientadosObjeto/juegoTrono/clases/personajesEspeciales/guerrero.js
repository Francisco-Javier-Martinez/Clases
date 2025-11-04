import { Arma } from "../arma.js";
import { Personaje } from "../personaje.js";
export class Guerrero extends Personaje{
    #arma;

    constructor(){
        super();
        this.#arma;
    }

    meterArma(arma_){
        if (!(arma_ instanceof Arma)) {
            console.log("Error: Solo se pueden añadir instancias de arma");
            return;
        }
        this.#arma=arma_;
    }

    luchar(){
        console.log(this.getNombrePersonaje()+" ataca con su "+this.#arma.getNombreArma()+ ", causando "+this.#arma.getDano()+" puntos");
    }

    entrenar(){
        console.log(this.getNombrePersonaje()+" Entrena sin descanso para la proxima batalla");
    }
    getArma(){
        return this.#arma;
    }

}