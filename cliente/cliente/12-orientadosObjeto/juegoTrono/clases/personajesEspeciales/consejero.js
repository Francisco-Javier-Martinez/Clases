import { Personaje } from "../personaje.js";
export class Consejero extends Personaje{
    #especialidad;

    constructor(nombrePersonaje,edad,live,casaPerteneciente,especialida){
        super(nombrePersonaje,edad,live,casaPerteneciente);
        this.#especialidad=especialida||"";
    }

    set meterEspecialidad(espe){
        this.#especialidad=espe;
    }

    luchar(){
        console.log(this.nombrePersonaje+" no lucha con armas, sino con palabras e inteligencia.");
    }

    aconsejar(rey){
        console.log(this.nombrePersonaje+" aconseja a "+rey.nombrePersonaje+" sobre "+this.#especialidad);
    }

    get especialidad(){
        return this.#especialidad;
    }

}