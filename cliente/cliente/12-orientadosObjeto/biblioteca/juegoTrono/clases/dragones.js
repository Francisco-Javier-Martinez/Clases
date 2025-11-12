export class Dragon{
    #nombre;
    #edad;
    #salud;
    #vivo;
    #casa;

    constructor(nombre, edad,casa_){
        this.#nombre=nombre||"";
        this.#edad=Number(edad)||0;
        this.#salud=2500;
        this.#vivo=true;
        this.#casa=casa_;
    }

    set nombre(nombre_){
        this.#nombre=nombre_;
    }

    set edad(edad_){
        this.#edad=edad_;
    }
    
    set salud(salud_){
        this.#salud=salud_;
    }

    recibirDano(totalAQuitar){
        this.#salud -=totalAQuitar;
        if(this.#salud<=0){
            console.log("El dragon "+this.#nombre+" a caido en combate");
            this.#vivo=false;
        }else{
            console.log("El dagron "+this.#nombre+" dispone aun de "+this.#salud);
        }
    }
    volar(){
        console.log(this.#nombre+" está volando.");
    }

    get nombre(){
        return this.#nombre;
    }

    get edad(){
        return this.#edad;
    }

    get salud(){
        return this.#salud;
    }

    get vivo(){
        return this.#vivo;
    }

    get casa(){
        return this.#casa;
    }

}