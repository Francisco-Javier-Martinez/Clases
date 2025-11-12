import { Dragon } from "./dargon.js";
export class BatallaAerea {
    iniciarBatalla(dragonA, dragonB) {
        if(!(dragonA && dragonB instanceof Dragon)) {
            console.log("Error: Ambos participantes deben ser instancias de Dragon.");
        }else {
            if(dragonA.jinete == null && dragonB.jinete == null) {
                console.log("Error: Ambos dragones deben tener jinetes para iniciar la batalla aérea.");
            }else{
                let turno=1;
                console.log("La batalla entre "+dragonA.nombre+" y "+dragonB.nombre+" ha comenzado");
                let maxsimoTurnos=1000; //Para evitar bucles infinitos
                while(turno<maxsimoTurnos && dragonA.vida>0 && dragonB.vida>0){
                    console.log("Turno "+turno+": "+dragonA.nombre+" | "+dragonB.nombre);
                    //Los dragones se atacan una vez por turno
                    if(dragonA.vida>0){
                        dragonA.escupirFuego(dragonB);
                    }
                    if(dragonB.vida>0){
                        dragonB.escupirFuego(dragonA);
                    }
                    console.log(dragonA.nombre+" "+dragonA.vida+" | "+dragonB.nombre+" "+dragonB.vida);
                    if(dragonA.vida<=0){
                        console.log(dragonA.nombre+" ha muerto en combate.");
                    }
                    if(dragonB.vida<=0){
                        console.log(dragonB.nombre+" ha muerto en combate.");
                    }
                    turno++;
                }
                if(turno>=maxsimoTurnos){
                    console.log("La batalla ha terminado en empate por exceso de turnos");
                    return;
                }
                if(dragonA.vida<=0){
                    console.log(dragonB.nombre+" ha ganado la batalla");
                }
                if(dragonB.vida<=0){
                    console.log(dragonA.nombre+" ha ganado la batalla");
                }
            }
        }
    }
}