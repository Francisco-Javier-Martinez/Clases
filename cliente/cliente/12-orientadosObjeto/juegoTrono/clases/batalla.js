import { Guerrero } from "./personajesEspeciales/guerrero";

export class Batalla{
    #guerreroMuertos;

    constructor(){
        this.#guerreroMuertos=[];
    }
    
    iniciarBatalla(casaA,casaB){
        let guerreroCasaA=casaA.getMiembros().filter(guerrero => guerrero instanceof Guerrero);
        let guerreroCasaB=casaB.getMiembros().filter(guerrero => guerrero instanceof Guerrero);
        let turno=1;
        console.log("La batalla entre la casa "+casaA.getNombreCasa()+" y la casa "+casaB.getNombreCasa()+" ha comenzado!");
        let maxsimoTurnos=1000; //Para evitar bucles infinitos
        while(turno<maxsimoTurnos &&guerreroCasaA.length>0 && guerreroCasaB.length>0){
            //Coger al primer guerrero de cada casa
            let guerreroA=guerreroCasaA[0];
            let guerreroB=guerreroCasaB[0];
            console.log("Turno "+turno+": "+guerreroA.getNombrePersonaje()+" | "+guerreroB.getNombrePersonaje());
            //Guerrero A ataca a guerrero B
            while(guerreroA.getVida()>0 && guerreroB.getVida()>0){
                if(guerreroA.getVida()>0){
                    guerreroA.atacar(guerreroB);
                }
                if(guerreroB.getVida()>0){
                    guerreroB.atacar(guerreroA);
                }
                console.log(guerreroA.getNombrePersonaje()+" "+guerreroA.getVida()+" | "+guerreroB.getNombrePersonaje()+" "+guerreroB.getVida());
            }
            if(guerreroA.getVida()<=0){
                console.log(guerreroA.getNombrePersonaje()+" ha muerto en combate.");
                this.#guerreroMuertos.push(guerreroA);
                guerreroCasaA.splice(0,1);
            }
            if(guerreroB.getVida()<=0){
                console.log(guerreroB.getNombrePersonaje()+" ha muerto en combate.");
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
                console.log("La casa "+casaB.getNombreCasa()+" ha ganado la batalla");
            }
        if(guerreroCasaB.length===0){
            console.log("La casa "+casaA.getNombreCasa()+" ha ganado la batalla");
        }
    }

    monstrarGuerrerosMuertos(){
        console.log("Guerreros muertos en la batalla:");
        this.#guerreroMuertos.forEach(guerrero => {
            console.log(guerrero.getNombrePersonaje());
        });
    }
}