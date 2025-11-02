export class Arma{
    #informacion;
    #nombreArma;
    #dano;
    #tipo;

    constructor(){
        this.#informacion="";
        this.#nombreArma="";
        this.#dano=0;
        this.#tipo="";
    }

    set meterNombreArma(arma){
        this.#nombreArma=arma;
    }

    set meterInformacion(info){
        this.#informacion=info;
    }

    set meterDano(numDano){
        this.#dano=numDano;
    }

    set meterTipo(tip){
        this.#tipo=tip;
    }

    monstrarCaracteristicas(){
        console.log("Arma: "+this.#nombreArma+" informacion: "+this.#informacion+" daño "+this.#dano+" tipo de arma: "+this.#tipo);
    }
    
    // Getters para acceder a las propiedades
    getNombreArma(){
        return this.#nombreArma;
    }

    getInformacion(){
        return this.#informacion;
    }

    getDano(){
        return this.#dano;
    }

    getTipo(){
        return this.#tipo;
    }
}