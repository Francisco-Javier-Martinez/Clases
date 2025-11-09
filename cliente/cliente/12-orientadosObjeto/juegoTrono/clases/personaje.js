import { Casa } from "./casa.js";
/* import { Arma } from "./arma.js"; */
export class Personaje{
    #nombrePersonaje;
    #edad;
    #live;
    #casaPerteneciente;
    /* #arma; */
    constructor(nombre, edad, live, casa){
        this.#nombrePersonaje=nombre || "";
        this.#edad =edad ||0;
        this.#live = live || true;
        if (!(casa instanceof Casa)) {
            console.log("Advertencia: Se intentó asignar un valor que no es una instancia de Casa.");
            this.#casaPerteneciente = null;
        } else {
            this.#casaPerteneciente = casa;
        }
    }
    //SET
    set meterNombrePersonaje(nombre){
        this.#nombrePersonaje=nombre;
    }
    set meterEdad(_edad){
        this.#edad=_edad;
    }
    
    meterCasa(cas){
        if (!(cas instanceof Casa)) {
            console.log("Error: Solo se pueden añadir instancias de Casa");
            return;
        }
        this.#casaPerteneciente=cas;
    }
    /* meterArma(arm){
        if (!(arm instanceof Arma)) {
            console.log("Error: Solo se pueden añadir instancias de Arma");
            return;
        }
        this.#arma=arm;
    } */
    presentarse(){
        let nombreCasa=this.#casaPerteneciente.getNombreCasa();
        console.log("Soy "+this.#nombrePersonaje+" y pertenezco a la casa: "+nombreCasa);
    }

    //morir
    morrir(){
        this.#live=false;
    }


    // Getters
    getNombrePersonaje(){
        return this.#nombrePersonaje;
    }

    getVido(){
        return this.#live;
    }

    getEdad(){
        return this.#edad;
    }

    estaVivo(){
        return this.#live;
    }

    getCasaPerteneciente(){
        return this.#casaPerteneciente;
    }

    /* getArma(){
        return this.#arma;
    } */
}