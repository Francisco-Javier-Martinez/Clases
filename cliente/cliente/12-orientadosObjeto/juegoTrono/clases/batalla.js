import { Guerrero } from "./personajesEspeciales/guerrero.js";
export class Batalla{
    #guerreroMuertos;
    #guerrerosSobrebientes;

    constructor(){
        this.#guerreroMuertos=[];
        this.#guerrerosSobrebientes=[];
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
            if(guerreroA.vida>0){
                guerreroA.atacar(guerreroB);
            }
            if(guerreroB.vida>0){
                guerreroB.atacar(guerreroA);
            }
            console.log(guerreroA.nombrePersonaje+" "+guerreroA.vida+" | "+guerreroB.nombrePersonaje+" "+guerreroB.vida);
            if(guerreroA.vida<=0){
                console.log(guerreroA.nombrePersonaje+" ha muerto en combate.");
                this.#guerreroMuertos.push(guerreroA);
                guerreroA.morrir();
                guerreroCasaA.splice(0,1);
            }
            if(guerreroB.vida<=0){
                console.log(guerreroB.nombrePersonaje+" ha muerto en combate.");
                this.#guerreroMuertos.push(guerreroB);
                guerreroB.morrir();
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
                guerreroCasaB.forEach(element => {
                    // Comprobar usando la propiedad público 'vivo' del personaje
                    if(element.vivo){
                        this.#guerrerosSobrebientes.push(element);
                    }
                });
            }
        if(guerreroCasaB.length===0){
            console.log("La casa "+casaA.nombreCasa+" ha ganado la batalla");
            guerreroCasaA.forEach(element => {
                if(element.vivo){
                    this.#guerrerosSobrebientes.push(element);
                }
            });
        }
    }

    monstrarGuerrerosMuertos(){
        console.log("Guerreros muertos en la batalla:");
        this.#guerreroMuertos.forEach(guerrero => {
            console.log(guerrero.nombrePersonaje);
        });
    }
    
    monstrarVivos(){
        console.log("GUERREROS SOBREVIVIENTES:");
        this.#guerrerosSobrebientes.forEach(element => {
            console.log("Guerrero "+element.nombrePersonaje+" ha sobrevivido");
        });
    }
}