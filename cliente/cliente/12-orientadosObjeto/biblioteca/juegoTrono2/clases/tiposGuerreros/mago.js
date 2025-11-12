import { Guerrero } from "../personajesEspeciales/guerrero.js";

export class Mago extends Guerrero{
    #poderMagico;
    #nombreHechizo;

    constructor(nombrePersonaje,edad,live,casaPerteneciente,arma,velo,poder,hechizo){
        super(nombrePersonaje,edad,live,casaPerteneciente,arma,velo);
        this.#poderMagico=poder || 0;
        this.#nombreHechizo=hechizo || "";
    }

    set poderMagico(poder){
        this.#poderMagico=poder;
    }

    set ponerNombreHecizo(nom){
        this.#poderMagico=nom;
    }

    presentarseMago(){
        console.log("Soy "+this.nombrePersonaje+" pertenezco a la casa "+this.casaPerteneciente.nombreCasa+" mi poder es de "+this.#nombreHechizo+" y hago este daño "+this.#poderMagico);
    }

    
    get poderMagico(){
        return this.#poderMagico;
    }

    get nombreHechizo(){
        return this.#nombreHechizo;
    }
}