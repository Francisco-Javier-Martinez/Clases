export class Batalla{
    #guerreroMuertos;

    constructor(){
        this.#guerreroMuertos=[];
    }

    iniciarBatalla(casaA,casaB){
        let guerreroCasaA=casaA.getMiembros();
        let guerreroCasaB=casaB.getMiembros();
        let turno=1;
        console.log("La batalla entre la casa "+casaA.getNombreCasa()+" y la casa "+casaB.getNombreCasa()+" ha comenzado!");
        let maxsimoTurnos=1000;
        while(turno<maxsimoTurnos &&guerreroCasaA.length>0 && guerreroCasaB.length>0){
            //Coger al primer guerrero de cada casa
            let luchadorA=guerreroCasaA.shift();
            let luchadorB=guerreroCasaB.shift();
            console.log("Turno "+(turno)+"Se enfrentan "+luchadorA.getNombrePersonaje()+ " contra "+luchadorB.getNombrePersonaje());
            //Luchador A ataca a luchador B
            luchadorA.atacar(luchadorB);
            if(!luchadorB.getVido()){
                console.log(luchadorB.getNombrePersonaje()+" ha muerto en la batalla.");
                this.#guerreroMuertos.push(luchadorB);
            }
            //Si luchador B sigue vivo, ataca a luchador A
            if(luchadorB.getVido()){
                luchadorB.atacar(luchadorA);
                if(!luchadorA.getVido()){
                    console.log(luchadorA.getNombrePersonaje()+" ha muerto en la batalla.");
                    this.#guerreroMuertos.push(luchadorA);
                }
            }
            //Eliminar guerreros muertos de las listas
            if(luchadorA.getVido()){
                guerreroCasaA.push(luchadorA); // Devuelve al vivo a la cola
            }
            if(luchadorB.getVido()){
                guerreroCasaB.push(luchadorB); // Devuelve al vivo a la cola
            }
            turno++;
        }
    }

    monstrarGuerrerosMuertos(){
        console.log("Guerreros muertos en la batalla:");
        this.#guerreroMuertos.forEach(guerrero => {
            console.log(guerrero.getNombrePersonaje());
        });
    }
}