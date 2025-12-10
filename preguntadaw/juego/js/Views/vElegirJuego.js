// Asegúrate de que este archivo JS esté siendo cargado en tu HTML
export class VelegirJuego {
    constructor() {
        console.log("Vista: Constructor ejecutado..."); 
        this.form = document.getElementById('seleccionJuegoForm');
        this.inputCodigo = document.getElementById('codigoJuego');
        this.configurarManejadorFormulario();
    }

    //Este metodo configura el manejador de eventos para el formulario de selección de juego
    configurarManejadorFormulario() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.manejarEnvioCodigo(e));
        }
    }
    //Este metodo maneja el envio del formulario de selección de juego
    manejarEnvioCodigo(evento) {
        evento.preventDefault(); // Detener el envío normal del formulario
        // Obtener el código ingresado por el usuario
        const codigo = this.inputCodigo.value.trim();
        
        // Mostrar mensaje inline si la longitud no es correcta
        const cont = document.getElementById('mensajeCodigo');
        if (codigo.length !== 7) {
            if(cont){ cont.style.display = 'block'; cont.style.color = '#ff5555'; cont.textContent = 'Ha de ser máximo 7'; }
            return; 
        }

        // Si pasa validación cliente, limpiar mensaje y enviar formulario al servidor
        if(cont){ cont.style.display = 'none'; cont.textContent = ''; }
        this.form.submit();
    }
}
