import { Guerrero } from "./personajesEspeciales/guerrero.js";

export class Dragon{
    #nombre;
    #vida;
    #tipo;
    #daño;
    #vivo;

    constructor(nom,tip,dañ){
        this.#nombre=nom;
        this.#tipo=tip;
        this.#daño=dañ;
        this.#vida=2500;
        this.#vivo=true;
    }

    recibirDano(puntos){
        this.#vida -= puntos;
        console.log("Al dragon "+this.#nombre+" le quedan "+this.#vida+" puntos de vida.");
        if(this.#vida<=0){
            this.#vida=0;
            this.#vivo=false;
        }
    }

    atacar(obj){
        if(!(obj instanceof Guerrero)){
            console.log("No es un guerrero");
        }else{
            if(obj.vivo==true){
                obj.recibirDano(this.#daño);
                if(obj.vivo==false){
                    console.log("El dragon "+this.#nombre+" mato a "+obj.nombrePersonaje);
                }
            }else{
                console.log("Este obj esta ya muerto");
            }
        }
    }

    get nombreDragon(){
        return this.#nombre;
    }

    get vivo(){
        return this.#vivo;
    }

    get tipoDragon(){
        return this.#tipo;
    }

    get dañoDragon(){
        return this.#daño;
    }
}