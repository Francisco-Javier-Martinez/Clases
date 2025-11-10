import { Dragon } from "../dragones.js";
import { Guerrero } from "../personajesEspeciales/guerrero.js";

export class Hielo extends Dragon{
    #congelacion;
    constructor(nombre, edad, casa, congelacion_){
        super(nombre, edad, casa);
        this.#congelacion=Number(congelacion_)||0;
    }

    set congelacion(congelacion_){
        this.#congelacion=congelacion_;
    }

    atacar(){
        console.log(this.nombre+" ataca con su aliento de hielo de "+this.#congelacion+" elado.");
    }

    atacarConHielo(objetivo){
        if(!(objetivo instanceof Guerrero || objetivo instanceof Dragon)){
            console.log("Error: Solo se pueden atacar instancias de Guerrero o Dragon");
        }else{
            if(objetivo.vivo==true){
                if(objetivo instanceof Guerrero){
                    const dano = Math.floor(this.#congelacion * (0.5 + Math.random()));
                    console.log(this.nombre+" lanza aliento de hielo causando "+dano+" puntos de daño."+ " al guerrero: "+objetivo.nombrePersonaje);
                    objetivo.recibirDano(dano);
                    if(objetivo.vida<=0){
                        console.log("El guerrero "+objetivo.nombrePersonaje +" ha sido derrotado.");
                    }
                }else{
                    const dano = Math.floor(this.#congelacion * (0.5 + Math.random()));
                    console.log(this.nombre+" lanza aliento de hielo causando "+dano+" puntos de daño."+" al dragón "+objetivo.nombre);
                    objetivo.recibirDano(dano);
                    if(objetivo.vida<=0){
                        console.log("El dragón "+objetivo.nombre+" ha sido derrotado.");
                    }
                }
            }else{
                console.log("Ese enemigo ya está muerto");
            }
        }
    }

    get congelacion(){
        return this.#congelacion;
    }
}