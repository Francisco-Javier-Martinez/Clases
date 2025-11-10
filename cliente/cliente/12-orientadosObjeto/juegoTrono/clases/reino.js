import { Casa } from "./casa.js";
import { Personaje } from "./personaje.js"
export class Reino{   
    #nombreReino;
    #casasReino;
    #rey;

    constructor(nombre){
        this.#nombreReino=nombre || "";
        this.#casasReino=[];
        this.#rey="";
    }
    
    set meterReino(reino){
        this.#nombreReino=reino;
    }

    meterCasa(casa){
        if (!(casa instanceof Casa)) {
            console.log("Error: Solo se pueden añadir instancias de Casa");
            return;
        }
        if(this.existeCasa(casa)){
            console.log("Casa ya existente en el reino");
        }else{
            this.#casasReino.push(casa);
            console.log("La Casa "+casa.NombreCasa+ "ha sido añadida al Reino de Poniente.");
        }
    }
    proclamarRey(personaje) {
        if (!(personaje instanceof Personaje)) {
            console.log("Error: El rey debe ser un Personaje.");
            return;
        }
        this.#rey = personaje;
        console.log(personaje.NombrePersonaje+" ha sido proclamado rey de Poniente."); // Salida de la imagen
    }
    existeCasa(casa){
        let indice = this.#casasReino.indexOf(casa);
        if(indice==-1){
            return false;
        }else{
            return true;
        }
    }

    mostrarReyActual() {
        console.log("Rey actual:");
        if (this.#rey) {
            const nombreRey = this.#rey.NombrePersonaje;
            const casaRey = this.#rey.CasaPerteneciente.NombreCasa;
            console.log("El rey actual es "+nombreRey+" de la "+casaRey);
        } else {
            console.log("No hay rey");
        }
    }

    visualizarCasas() {
        console.log("Casas del Reino de Poniente:");
        this.#casasReino.forEach(casa => {
            console.log(casa.NombreCasa);
        });
    }
    // Getters
    get nombreReino(){
        return this.#nombreReino;
    }

    get casasReino(){
        return [...this.#casasReino];
    }

    get rey(){
        return this.#rey;
    }
}