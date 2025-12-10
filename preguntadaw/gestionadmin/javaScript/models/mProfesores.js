export class Mprofesores {
    constructor() {
        this.apiUrl = 'php/controllers/cUsuario.php';
    }

    /**
     * Obtener todos los profesores/administradores
     * @returns {Promise<Array>}
     */
    async obtenerTodos() {
        try {
            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    accion: 'obtenerTodos'
                })
            });

            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status}`);
            }

            const datos = await response.json();
            return datos.success ? datos.data : [];
        } catch (error) {
            console.error('Error al obtener profesores:', error);
            return [];
        }
    }

    /**
     * Obtener un profesor específico por ID
     * @param {number} id
     * @returns {Promise<Object>}
     */
    async obtenerPorId(id) {
        try {
            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    accion: 'obtenerPorId',
                    id: id
                })
            });

            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status}`);
            }

            const datos = await response.json();
            return datos.success ? datos.data : null;
        } catch (error) {
            console.error('Error al obtener profesor:', error);
            return null;
        }
    }

    /**
     * Crear un nuevo profesor/administrador
     * @param {Object} datosProfesor - {userName, email, password}
     * @returns {Promise<Object>}
     */
    async crear(datosProfesor) {
        try {
            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    accion: 'crear',
                    userName: datosProfesor.userName,
                    email: datosProfesor.email,
                    password: datosProfesor.password
                })
            });

            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status}`);
            }

            const datos = await response.json();
            return datos;
        } catch (error) {
            console.error('Error al crear profesor:', error);
            return {
                success: false,
                message: 'Error al crear el profesor'
            };
        }
    }

    /**
     * Actualizar un profesor existente
     * @param {number} id
     * @param {Object} datosActualizados - {userName, email, password}
     * @returns {Promise<Object>}
     */
    async actualizar(id, datosActualizados) {
        try {
            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    accion: 'actualizar',
                    id: id,
                    userName: datosActualizados.userName,
                    email: datosActualizados.email,
                    password: datosActualizados.password
                })
            });

            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status}`);
            }

            const datos = await response.json();
            return datos;
        } catch (error) {
            console.error('Error al actualizar profesor:', error);
            return {
                success: false,
                message: 'Error al actualizar el profesor'
            };
        }
    }

    /**
     * Eliminar un profesor
     * @param {number} id
     * @returns {Promise<Object>}
     */
    async eliminar(id) {
        try {
            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    accion: 'eliminar',
                    id: id
                })
            });

            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status}`);
            }

            const datos = await response.json();
            return datos;
        } catch (error) {
            console.error('Error al eliminar profesor:', error);
            return {
                success: false,
                message: 'Error al eliminar el profesor'
            };
        }
    }

    /**
     * Validar email en el servidor
     * @param {string} email
     * @returns {Promise<Object>}
     */
    async validarEmail(email) {
        try {
            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    accion: 'validarEmail',
                    email: email
                })
            });

            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status}`);
            }

            const datos = await response.json();
            return datos;
        } catch (error) {
            console.error('Error al validar email:', error);
            return {
                success: false,
                disponible: false
            };
        }
    }
}