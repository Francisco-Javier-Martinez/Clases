import { Arma } from "../arma.js";
import { Personaje } from "../personaje.js";
export class Guerrero extends Personaje{
    #arma;
    #vida;

    constructor(nombrePersonaje,edad,live,casaPerteneciente,arma){
        super(nombrePersonaje,edad,live,casaPerteneciente);
        if(this.getVido()){
            this.#vida=100;
        }else{
            this.#vida=0;
        }
        if (!(arma instanceof Arma)) {
            console.log("Advertencia: Se intentó asignar un valor que no es una instancia de Arma.");
            this.#arma = null;
        } else {
            this.#arma = arma;
        }
    }

    meterArma(arma_){
        if (!(arma_ instanceof Arma)) {
            console.log("Error: Solo se pueden añadir instancias de arma");
            return;
        }
        this.#arma=arma_;
    }

    recibirDano(puntos){
        this.#vida -= puntos;
        if(this.#vida<=0){
            this.#vida=0;
            this.morrir();
        }
    }

    atacar(objetivo){
        const daño = Math.floor(this.#arma.getDano()*(0.7+Math.random()*0.6));
        console.log(this.getNombrePersonaje()+" ataca a "+objetivo.getNombrePersonaje()+ " causando "+daño);
        objetivo.recibirDano(daño);
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