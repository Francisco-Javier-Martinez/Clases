export class Mprofesores {
    constructor(){
        this.baseUrl = 'https://24.daw.esvirgua.com/JosephParte/administrador/api';
    }
    async borrarAccesoProfesor(profesorId){ 
        if(!profesorId){
            console.error("ID de profesor no proporcionado.");
            return;
        }else{
            try {
                const response = await fetch(`${this.baseUrl}/index.php?controller=Profesores&action=borrarAcceso&profesorId=${profesorId}`); 
                // Verificar si la respuesta fue exitosa antes de intentar parsear el JSON
                if (!response.ok) {
                    throw new Error(`Error en la solicitud: ${response.status}`);
                }
                
                return await response.json();
            } catch (error) {
                console.error("Error al borrar el acceso del profesor:", error);
                return { success: false, message: error.message }; 
            }
        }
    }
}