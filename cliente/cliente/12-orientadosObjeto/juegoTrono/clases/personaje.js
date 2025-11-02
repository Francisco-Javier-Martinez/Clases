<<<<<<< HEAD
import { Casa } from "./casa.js";
import { Arma } from "./arma.js";
export class Personaje{
    #nombrePersonaje;
    #edad;
    #live;
    #casaPerteneciente;
    #arma;

    constructor(){
        this.#nombrePersonaje="";
        this.#edad = 0;
        this.#live = true;
        this.#casaPerteneciente="";
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
    meterArma(arm){
        if (!(arm instanceof Arma)) {
            console.log("Error: Solo se pueden añadir instancias de Arma");
            return;
        }
        this.#arma=arm;
    }
    presentarse(){
        let nombreCasa=this.#casaPerteneciente.getNombreCasa();
        console.log("Soy "+this.#nombrePersonaje+" y tengo "+ this.#edad+" y pertenezco a la casa: "+nombreCasa);
    }

    // Getters
    getNombrePersonaje(){
        return this.#nombrePersonaje;
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

    getArma(){
        return this.#arma;
    }


=======
import { Casa } from "./casa.js";
import { Arma } from "./arma.js";
export class Personaje{
    #nombrePersonaje;
    #edad;
    #live;
    #casaPerteneciente;
    #arma;

    constructor(){
        this.#nombrePersonaje="";
        this.#edad = 0;
        this.#live = true;
        this.#casaPerteneciente="";
    }

    set meterNombrePersonaje(nombre){
        this.#nombrePersonaje=nombre;
    }
    set meterEdad(_edad){
        this.#edad=_edad;
    }
    
    meterCasa(cas){
        if (!(cas instanceof Casa)) {
            console.log("Error: Solo se pueden añadir instancias de Arma");
            return;
        }
        this.#casaPerteneciente=cas;
    }
    meterArma(arm){
        if (!(arm instanceof Arma)) {
            console.log("Error: Solo se pueden añadir instancias de Arma");
            return;
        }
        this.#arma=arm;
    }
    presentarse(){
        console.log("Soy "+this.#nombrePersonaje+" y tengo "+ this.#edad+" y pertenezco a la casa: ");
    }

    // Getters
    getNombrePersonaje(){
        return this.#nombrePersonaje;
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

    getArma(){
        return this.#arma;
    }


>>>>>>> f755361ee5e9c8cb9624ae4c46773d2fcfd6c9f8
}