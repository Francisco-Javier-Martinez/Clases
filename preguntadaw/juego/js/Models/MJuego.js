export class MJuego {
    constructor() {
        // Usar `window.API_BASE` si está definido (flexible para despliegues),
        // si no, por defecto usar una ruta relativa al directorio `api`.
        // Esto evita peticiones a hosts externos cuando trabajas en local.
        this.baseUrl = (typeof window !== 'undefined' && window.API_BASE)
            ? window.API_BASE.replace(/\/+$/,'')
            : '../api';
    }

    async obtenerPreguntasConRespuestas(idTema) {
        const response = await fetch(`../api/preguntas_con_respuestas.php?tema=${encodeURIComponent(idTema)}`);
        const preguntas = await response.json(); 
        
        console.log(' Preguntas recibidas:', preguntas.length, 'preguntas');
        
        return preguntas; 
    }

    obtenerTemas() {
        return fetch('../js/Data/temas.json').then(r => r.json());
    }
}