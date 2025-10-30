import { Usuario } from "./usuario.js";

class UsuarioVip extends Usuario{
    #membresia;
    #dinero;
    constructor(){
        this.#membresia="";
        this.#dinero=0;
    }
    
    set meterMembresia(_membresia){
        this.#membresia=_membresia;
    }
    set meterDinero(_dinero){
        this.#dinero=_dinero;
    }
    
}