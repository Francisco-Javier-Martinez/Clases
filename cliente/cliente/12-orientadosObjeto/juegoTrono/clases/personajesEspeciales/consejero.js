import { Personaje } from "../personaje.js";
export class Consejero extends Personaje{
    #especialidad;

    constructor(){
        super();
        this.#especialidad="";
    }

    set meterEspecialidad(espe){
        this.#especialidad=espe;
    }

    luchar(){
        console.log(this.getNombrePersonaje()+" no lucha con armas, sino con palabras e inteligencia.");
    }

    aconsejar(rey){
        console.log(this.getNombrePersonaje()+" aconseja a "+rey.getNombrePersonaje()+" sobre "+this.#especialidad);
    }

    getEspecialidad(){
        return this.#especialidad;
    }

}