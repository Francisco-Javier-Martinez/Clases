import { Personaje } from "./personaje.js";
import { Guerrero } from "./personajesEspeciales/guerrero.js";
export class Casa{
    #nombreCasa;
    #lema;
    #miembros;

    constructor(casa,lem){
        this.#nombreCasa=casa || "";
        this.#lema=lem ||  "";
        this.#miembros=[];
    }

    set meterNombreCasa(casa){
        this.#nombreCasa=casa;
    }

    set meterLema(lemaIntro){
        this.#lema=lemaIntro;
    }

    
    visualizarMiembro(){
        if(this.#miembros.length==0){
            console.log("No hay miembros");
        }else{
            this.#miembros.forEach(element => {
                console.log(element.nombrePersonaje);
            });
        }
    }

    meterMiembro(miem){
        if (!(miem instanceof Personaje)) {
            console.log("Error: Solo se pueden añadir instancias de Personaje");
            return;
        }
        if(this.EstaMiembro(miem)){
            console.log("Este miembro ya existe en la casa");
        }else{
            this.#miembros.push(miem);
        }
        
    }

    EstaMiembro(miem){
        let indice = this.#miembros.indexOf(miem);
        if(indice==-1){
            return false;
        }else{
            return true;
        }
    }
    
    recogerGuerrero(){
        let guerreros=[];
        guerreros=this.miembros.filter(guerrero => guerrero instanceof Guerrero);
        return guerreros;
    }

    // Getters
    get nombreCasa(){
        return this.#nombreCasa;
    }

    get lema(){
        return this.#lema;
    }

    get miembros(){
        return this.#miembros;
    }
}