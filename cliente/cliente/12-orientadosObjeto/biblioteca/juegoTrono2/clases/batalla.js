import { Casa } from "./casa.js";
import { Guerrero } from "./personajesEspeciales/guerrero.js";

export class Batalla{
    #guerreroMuertos;

    constructor(){
        this.#guerreroMuertos=[];
    }
    
    iniciarBatalla(casaA,casaB){
        let guerreroCasaA=casaA.miembros.filter(guerrero => guerrero instanceof Guerrero);
        let guerreroCasaB=casaB.miembros.filter(guerrero => guerrero instanceof Guerrero);
        let turno=1;
        console.log("La batalla entre la casa "+casaA.nombreCasa+" y la casa "+casaB.nombreCasa+" ha comenzado");
        let maxsimoTurnos=1000; //Para evitar bucles infinitos
        while(turno<maxsimoTurnos &&guerreroCasaA.length>0 && guerreroCasaB.length>0){
            //Coger al primer guerrero de cada casa
            let guerreroA=guerreroCasaA[0];
            let guerreroB=guerreroCasaB[0];
            console.log("Turno "+turno+": "+guerreroA.nombrePersonaje+" | "+guerreroB.nombrePersonaje);
            //Los guerreros se atacan una vez por turno
            if(guerreroA.velocidad>guerreroB.velocidad){
                if(guerreroA.vida>0){
                    guerreroA.atacar(guerreroB);
                }
                if(guerreroB.vida>0){
                    guerreroB.atacar(guerreroA);
                }
            }else{
                if(guerreroB.vida>0){
                    guerreroB.atacar(guerreroA);
                }
                if(guerreroA.vida>0){
                    guerreroA.atacar(guerreroB);
                }
            }
            console.log(guerreroA.nombrePersonaje+" "+guerreroA.vida+" | "+guerreroB.nombrePersonaje+" "+guerreroB.vida);
            if(guerreroA.vida<=0){
                console.log(guerreroA.nombrePersonaje+" ha muerto en combate.");
                this.#guerreroMuertos.push(guerreroA);
                guerreroCasaA.splice(0,1);
            }
            if(guerreroB.vida<=0){
                console.log(guerreroB.nombrePersonaje+" ha muerto en combate.");
                this.#guerreroMuertos.push(guerreroB);
                guerreroCasaB.splice(0,1);
            }
            turno++;
        }
        if(turno>=maxsimoTurnos){
            console.log("La batalla ha terminado en empate por exceso de turnos");
            return;
        }
        if(guerreroCasaA.length===0){
                console.log("La casa "+casaB.nombreCasa+" ha ganado la batalla");
                console.log("Guerreros sobrebibientes de la casa Lannister");
                this.monstrarGuerrerosVivos(casaB);
            }
        if(guerreroCasaB.length===0){
            console.log("La casa "+casaA.nombreCasa+" ha ganado la batalla");
            console.log("Guerreros sobrebibientes de la casa stark");
            this.monstrarGuerrerosVivos(casaA);
        }
    }

    monstrarGuerrerosMuertos(){
        console.log("Guerreros muertos en la batalla:");
        this.#guerreroMuertos.forEach(guerrero => {
            console.log(guerrero.nombrePersonaje);
        });
    }

    monstrarGuerrerosVivos(casa){
        if(!(casa instanceof Casa)){
            console.log("No es una instancia de casa");
        }else{
            let guerrerosVivos;
            guerrerosVivos=casa.miembros.filter(vivos=>vivos.vivo == true);
            guerrerosVivos.forEach(element => {
                console.log("Guerreo: "+element.nombrePersonaje+" sigue vivo con un total de vida de : "+element.vida);
            });
        }
    }
}