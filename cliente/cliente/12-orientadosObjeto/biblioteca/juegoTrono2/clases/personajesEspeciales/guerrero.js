import { Arma } from "../arma.js";
import { Personaje } from "../personaje.js";
export class Guerrero extends Personaje{
    #arma;
    #vida;
    #velocidad;

    constructor(nombrePersonaje,edad,live,casaPerteneciente,arma,velo){
        super(nombrePersonaje,edad,live,casaPerteneciente);
        if(this.vivo){
            this.#vida=100;
        }else{
            this.#vida=0;
        }
        this.#velocidad=velo;
        if (!(arma instanceof Arma)) {
            console.log("Advertencia: Se intentó asignar un valor que no es una instancia de Arma.");
            this.#arma = null;
        } else {
            this.#arma = arma;
        }
    }

    set vida(vida_){
        this.#vida=vida_;
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
        const daño = Math.floor(this.#arma.dano*(0.7+Math.random()*0.6));
        if(!(objetivo instanceof Guerrero)){
            console.log(this.nombrePersonaje+" ataca al dragon "+objetivo.nombreDragon+ " causando "+daño);
        }else{
            console.log(this.nombrePersonaje+" ataca a "+objetivo.nombrePersonaje+ " causando "+daño);   
        }
        objetivo.recibirDano(daño);
    }

    luchar(){
        console.log(this.nombrePersonaje+" ataca con su "+this.#arma.nombreArma+ ", causando "+this.#arma.dano+" puntos");
    }

    entrenar(){
        console.log(this.nombrePersonaje+" Entrena sin descanso para la proxima batalla");
    }

    get velocidad(){
        return this.#velocidad;
    }

    get vida(){
        return this.#vida;
    }
    get arma(){
        return this.#arma;
    }

}