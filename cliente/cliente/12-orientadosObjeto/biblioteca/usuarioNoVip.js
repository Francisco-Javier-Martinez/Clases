import { Usuario } from "./usuario.js";

class UsuarioNoVips extends Usuario{
    #correo;
    #dirrecion;
    constructor(){
        this.#correo="";
        this.#dirrecion="";
    }
    
    set meterCorreo(_correo){
        this.#correo=_correo;
    }
    set meterDireccion(_dirreccion){
        this.#dirrecion=_dirreccion;
    }
}