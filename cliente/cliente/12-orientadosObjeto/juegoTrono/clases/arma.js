export class Arma{
    #informacion;
    #nombreArma;
    #dano;
    #tipo;

    constructor(info,nombre,danoo,tip){
        this.#informacion=info||"";
        this.#nombreArma=nombre||"";
        this.#dano=danoo||0;
        this.#tipo=tip||"";
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