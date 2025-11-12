import { Dragon } from "../dragones.js";
import { Guerrero } from "../personajesEspeciales/guerrero.js";

export class Electrico extends Dragon{
    #voltaje;
    constructor(nombre, edad, casa, voltaje){
        super(nombre, edad, casa);
        this.#voltaje=Number(voltaje)||0;
    }

    set voltaje(voltaje){
        this.#voltaje=voltaje;
    }

    atacar(){
        console.log(this.nombre+" ataca con un rayo de "+this.#voltaje+" voltios.");
    }

    atacarConVoltaje(objetivo){
        if(!(objetivo instanceof Guerrero || objetivo instanceof Dragon)){
            console.log("Error: Solo se pueden atacar instancias de Guerrero o Dragon");
        }else{
            if(objetivo.vivo==true){
                if(objetivo instanceof Guerrero){
                    if(objetivo.casaPerteneciente.nombreCasa==this.casa.nombreCasa){
                        console.log("Son de la misma casa no se pueden pegar");
                    }else{  
                        const dano = Math.floor(this.#voltaje * (0.5 + Math.random()));
                        console.log(this.nombre+" lanza un rayo eléctrico causando "+ dano+" puntos de daño."+ " al guerrero: "+objetivo.nombrePersonaje);
                        objetivo.recibirDano(dano);
                        if(objetivo.vida<=0){
                            console.log("El guerrero "+objetivo.nombrePersonaje +" ha sido derrotado.");
                        }
                    }
                }else{
                    if(objetivo.casa.nombreCasa==this.casa.nombreCasa){
                        console.log("Son de la misma casa no se pueden pegar");
                    }else{
                        const dano = Math.floor(this.#voltaje * (0.5 + Math.random()));
                        console.log(this.nombre+" lanza un rayo eléctrico causando "+dano+" puntos de daño."+" al dragón "+objetivo.nombre);
                        objetivo.recibirDano(dano);
                        if(objetivo.vida<=0){
                            console.log("El dragón "+objetivo.nombre+" ha sido derrotado.");
                        }
                    }
                }
            }else{
                console.log("Ese enemigo ya está muerto");
            }
        }
    }

    get voltaje(){
        return this.#voltaje;
    }
}