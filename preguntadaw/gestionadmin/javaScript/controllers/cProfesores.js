// Clase CProfesores (Actualizada)
import { Mprofesores } from '../models/mProfesores.js';
export class CProfesores {
    constructor() {
        this.modelo = new Mprofesores(); // Instanciar el modelo
    }
    
    async borrarAccesoProfesor(profesorId) { 
        if (!profesorId) {
            console.error("ID de profesor no proporcionado.");
            return;
        } else {
            // Llamar al método asíncrono del modelo y esperar la respuesta
            const resultado = await this.modelo.borrarAccesoProfesor(profesorId); 
            // Lógica para manejar la respuesta del modelo
            if (resultado && resultado.success) {
                alert("Acceso borrado exitosamente.");
                // Redirigir a la página de profesores
                window.location.reload(); 
            } else {
                alert(`Error al borrar acceso: ${resultado.message || 'Error desconocido'}`);
            }
        }
    }
}