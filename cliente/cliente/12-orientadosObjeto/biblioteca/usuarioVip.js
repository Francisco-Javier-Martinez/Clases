import { Usuario } from "./usuario.js";

export class UsuarioVip extends Usuario{
    #membresia;
    #dinero;
    constructor(){
        super();
        this.#membresia="";
        this.#dinero=0;
    }
    
    set meterMembresia(_membresia){
        this.#membresia=_membresia;
    }
    set meterDinero(_dinero){
        this.#dinero=_dinero;
    }
    
    monstrarUsuario(){
        console.log("Nombre: " + this.nombre +" Edad: " + this.edad +" Teléfono: " + this.telefono +" Tipo: VIP" +" Membresía: " + this.#membresia +" Dinero: " + this.#dinero + "€" +" Libros Prestados: " + this.libroPrestados.length);
    }
}