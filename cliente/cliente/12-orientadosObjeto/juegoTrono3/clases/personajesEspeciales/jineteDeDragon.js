import { Guerrero } from "../personajesEspeciales/guerrero.js";
import { Dragon } from "../dargon.js";

export class JineteDeDragon extends Guerrero{
    dragon;
    constructor(nombrePersonaje,edad,live,casaPerteneciente,arma,dragon){
        super(nombrePersonaje,edad,live,casaPerteneciente,arma);
        if(!(dragon instanceof Dragon)){
            console.log("Error: El dragon debe ser una instancia de Dragon");
        }else{
            this.dragon=dragon;
        }
    }

    montarDragon(){
        this.dragon.volar();
    }

    luchar(){
        console.log(this.nombrePersonaje+" está luchando montado en el dragón "+this.dragon.nombre);
    }


    get getDragon(){
        return this.dragon;
    }
}