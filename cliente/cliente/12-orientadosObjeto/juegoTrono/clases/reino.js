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

}