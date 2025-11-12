import { Dragon } from "../dragones.js";
import { Guerrero } from "../personajesEspeciales/guerrero.js";

export class Fuego extends Dragon{
    #temperaturaAliento;
    constructor(nombre, edad, casa, temperatura){
        super(nombre, edad,casa);
        this.#temperaturaAliento=Number(temperatura)||0;
    }

    set temperaturaAliento(temperatura){
        this.#temperaturaAliento=temperatura;
    }

    atacar(){
        console.log(this.nombre+" ataca con su aliento de fuego de "+this.#temperaturaAliento+" grados.");
    }

    atacarConFuego(objetivo){
        if(!(objetivo instanceof Guerrero || objetivo instanceof Dragon)){
            console.log("Error: Solo se pueden atacar instancias de Guerrero o Dragon");
        }else{
            if(objetivo.vivo==true){
                if(objetivo instanceof Guerrero){
                    const dano = Math.floor(this.#temperaturaAliento * (0.5 + Math.random()));
                    console.log(this.nombre+" lanza aliento de fuego causando "+dano+" puntos de daño."+ " al guerreo: "+objetivo.nombrePersonaje);
                    objetivo.recibirDano(dano);
                    if(objetivo.vida<=0){
                        console.log("El guerrero "+objetivo.nombrePersonaje +" ha sido derrotado.");
                    }
                }else{
                    const dano = Math.floor(this.#temperaturaAliento * (0.5 + Math.random()));
                    console.log(this.nombre+" lanza aliento de fuego causando "+dano+" puntos de daño."+" al dragon "+objetivo.nombre);
                    objetivo.recibirDano(dano);
                    if(objetivo.vida<=0){
                        console.log("El dragon "+objetivo.nombre+" ha sido derrotado.");
                    }
                }
            }else{
                console.log("Ese enemigo ya esta muerto");
            }
        }
    }

    get temperaturaAliento(){
        return this.#temperaturaAliento;
    }
}