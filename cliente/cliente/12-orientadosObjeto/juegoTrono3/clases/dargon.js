import { Guerrero } from "./personajesEspeciales/guerrero.js";

export class Dragon{
    #nombre;
    #edad;
    #tipo;
    #vida;
    #fuerzaDeFuego;
    #jinete;
    #vivo;

    constructor(nombre, edad, tipo,fuerzaDeFuego){
        this.#nombre=nombre||"";
        this.#edad=Number(edad)||0;
        this.#tipo=tipo||"";
        this.#vida=1500;
        this.#fuerzaDeFuego=Number(fuerzaDeFuego)||50;
        this.#jinete=null;
        this.#vivo=true;
    }

    morrir(){
        this.#vivo=false;
        console.log("El dragon "+this.#nombre+" ha muerto.");
    }

    volar(){
        console.log("El dragon "+this.#nombre+" está volando.");
    }

    escupirFuego(obj){
        if(!(obj instanceof Guerrero || obj instanceof Dragon)){
            console.log("Error: Solo se pueden atacar instancias de Guerrero o Dragon");
        }else{
            if(obj.vivo==true){
                if(obj instanceof Dragon){
                    if(obj.dragon==null){
                        const dano = Math.floor(this.#fuerzaDeFuego * (0.5 + Math.random()));
                        console.log(this.#nombre+" escupe fuego al dragón "+obj.nombre+" causando "+dano+" puntos de daño.");
                        obj.recibirDano(dano);
                        if(obj.vida<=0){
                            console.log("El dragón "+obj.nombre+" ha sido derrotado.");
                        }
                    }else{
                        console.log("No se puede atacar a un dragón que tiene jinete.");
                    }
                }else{
                    console.log("Debe ser un dragón para atacarlo con fuego.");
                }
            }else{
                console.log("Ese enemigo ya está muerto");
            }
        }
    }

    recibirDano(puntos){
        this.#vida -= puntos;
        if(this.#vida<=0){
            this.#vida=0;
            this.morrir();
        }
    }

    vincularJinete(jinete_){
        if(!(jinete_ instanceof Guerrero)){
            console.log("Error: El Guerrero debe ser una instancia de Jinete");
        }else{
            this.#jinete=jinete_;
        }
    }

    get nombre(){
        return this.#nombre;
    }
    get edad(){
        return this.#edad;
    }
    get tipo(){
        return this.#tipo;
    }
    get vida(){
        return this.#vida;
    }
    get fuerzaDeFuego(){
        return this.#fuerzaDeFuego;
    }
    get jinete(){
        return this.#jinete;
    }
    get vivo(){
        return this.#vivo;
    }

}