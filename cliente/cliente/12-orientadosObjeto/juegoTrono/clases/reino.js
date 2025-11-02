<<<<<<< HEAD
import { Casa } from "./casa.js";
import { Personaje } from "./personaje.js"
export class Reino{   
    #nombreReino;
    #casasReino;
    #rey;

    constructor(){
        this.#nombreReino="";
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
            console.log("La Casa "+casa.getNombreCasa()+ "ha sido añadida al Reino de Poniente.");
        }
    }
    proclamarRey(personaje) {
        if (!(personaje instanceof Personaje)) {
            console.log("Error: El rey debe ser un Personaje.");
            return;
        }
        this.#rey = personaje;
        console.log(personaje.getNombrePersonaje()+" ha sido proclamado rey de Poniente."); // Salida de la imagen
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
            const nombreRey = this.#rey.getNombrePersonaje();
            const casaRey = this.#rey.getCasaPerteneciente().getNombreCasa();
            console.log("El rey actual es "+nombreRey+" de la "+casaRey);
        } else {
            console.log("No hay rey");
        }
    }

    visualizarCasas() {
        console.log("Casas del Reino de Poniente:");
        this.#casasReino.forEach(casa => {
            console.log(casa.getNombreCasa());
        });
    }
    // Getters
    getNombreReino(){
        return this.#nombreReino;
    }

    getCasasReino(){
        return [...this.#casasReino];
    }

    getRey(){
        return this.#rey;
    }

=======
import { Casa } from "./casa.js";
export class Reino{   
    #nombreReino;
    #casasReino;
    #rey;

    constructor(){
        this.#nombreReino="";
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
        }
    }

    existeCasa(casa){
        let indice = this.#casasReino.indexOf(casa);
        if(indice==-1){
            return false;
        }else{
            return true;
        }
    }

    // Getters
    getNombreReino(){
        return this.#nombreReino;
    }

    getCasasReino(){
        return [...this.#casasReino];
    }

    getRey(){
        return this.#rey;
    }

>>>>>>> f755361ee5e9c8cb9624ae4c46773d2fcfd6c9f8
}