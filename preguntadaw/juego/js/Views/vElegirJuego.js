export class VelegirJuego {
    constructor() {
        console.log("Vista: Constructor ejecutado..."); 
        //recoger el input del codigo del juego
        this.form = document.getElementById("seleccionJuegoForm");
        this.inputCodigo = document.getElementById("codigoJuego");
    }
}
