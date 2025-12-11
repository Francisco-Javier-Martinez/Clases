export class VelegirJuego {
    constructor() {
        console.log("Vista: Constructor ejecutado..."); 
        this.form = document.getElementById('seleccionJuegoForm');
        this.inputCodigo = document.getElementById('codigoJuego');
        this.configurarManejadorFormulario();
        this.configurarBotonesJugar();
    }


    //Este metodo configura el manejador de eventos para el formulario de selección de juego
    configurarManejadorFormulario() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.manejarEnvioCodigo(e));
        }
    }
    //Este metodo maneja el envio del formulario de selección de juego
    manejarEnvioCodigo(evento) {
        // Obtener el código ingresado por el usuario
        const codigo = this.inputCodigo.value.trim();

        // Mostrar mensaje inline si la longitud no es correcta
        const cont = document.getElementById('mensajeCodigo');
        if (codigo.length !== 7 || codigo.length<7) {
            // Evitar envío si inválido
            evento.preventDefault();
            if (cont) { cont.style.display = 'block'; cont.style.color = '#ff5555'; cont.textContent = 'Ha de ser exactamente 7 caracteres'; }
            return;
        }
    }

    configurarBotonesJugar(){
        // Delegación: buscar botones .jugar dentro de tarjetas y asignar comportamiento
        const tarjetas = Array.from(document.querySelectorAll('.tarjeta'));
        console.log('VelegirJuego: tarjetas encontradas =', tarjetas.length);
        tarjetas.forEach(tarjeta => {
            const btn = tarjeta.querySelector('.jugar');
            if(!btn) return;
            // No interceptamos la navegación: el enlace <a href="Ruleta-cusomizable-main/ruleta.php?idJuego=..."> realizará
            // la navegación al servidor y este inyectará los temas vía MVC (window.ruletaTemas).
            btn.addEventListener('click', (e) => {
                console.log('Jugar: navegación permitida al servidor para cargar la ruleta (MVC)');
                // dejar que el <a> funcione normalmente
            });
        });
    }

    // El servidor ahora redirige directamente a la página de la ruleta cuando el código es válido.
    // No es necesario que el cliente haga peticiones adicionales aquí.
}
