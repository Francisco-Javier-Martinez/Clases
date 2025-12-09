import { MAdmin } from './models/MAdmin.js';
import { VAdmin } from './views/VAdmin.js';
import { CAdmin } from './controllers/CAdmin.js';

import { MTemas } from './models/MTemas.js';
import { VTemas } from './views/VTemas.js';
import { CTemas } from './controllers/CTemas.js';

import { VanadirProfesores } from './views/vanadirProfesores.js';
import { VmodificarProfesores } from './views/vmodificarProfesor.js';

// Detectar la página actual mediante el ID del body
const page = document.body.id;

switch(page){
    case 'creacionJuegos':
        const modelo = new MAdmin();
        const vista = new VAdmin();
        const controlador = new CAdmin(modelo, vista);
        break;
    case 'modificacionTemas':
        console.log('Aplicación TEMA inicializada');
        // const urlParams = new URLSearchParams(window.location.search);
        // const titulo = urlParams.get('titulo');
        const modeloT = new MTemas();
        const vistaT = new VTemas();
        const controladorT = new CTemas(modeloT, vistaT);
        break;
    //caso para añadir profesores
    case 'profesores':
        const vanadirProfesores = new VanadirProfesores();        
        break;
    //caso para modificar profesores
    case 'modificarProfesor':
        const modificarProfesores = new VmodificarProfesores();
        break;

    default:
        console.log('Página no reconocida por la aplicación MVC');
        break;
}
console.log('Aplicación MVC inicializada');
