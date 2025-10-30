import { Usuario } from "./usuario.js";

export class UsuarioNoVips extends Usuario{
    #correo;
    #dirrecion;
    constructor(){
        super();
        this.#correo="";
        this.#dirrecion="";
    }
    
    set meterCorreo(_correo){
        this.#correo=_correo;
    }
    set meterDireccion(_dirreccion){
        this.#dirrecion=_dirreccion;
    }
    monstrarUsuario(){
        console.log("Nombre: " + this.nombre +" Edad: " + this.edad +" Teléfono: " + this.telefono +" Tipo: no vip " +"Correo: " + this.#correo +" Direccion: " + this.#dirrecion+" Libros Prestados: " + this.libroPrestados.length);
    }
}