import { Mprofesores } from '../models/mProfesores.js';
import { VanadirProfesores } from '../views/vanadirProfesores.js';

export class CProfesores {
    constructor() {
        this.modelo = new Mprofesores();
        this.vista = new VanadirProfesores();
        this.inicializar();
    }

    /**
     * Inicializar el controlador
     */
    inicializar() {
        // Registrar callbacks desde la vista
        this.vista.onCrearProfesor = (datos) => this.crearProfesor(datos);
        this.vista.onActualizarProfesor = (id, datos) => this.actualizarProfesor(id, datos);
        this.vista.onEliminarProfesor = (id) => this.eliminarProfesor(id);
        this.vista.onCargarProfesores = () => this.cargarProfesores();
        this.vista.onValidarEmail = (email) => this.validarEmail(email);

        // Cargar lista inicial de profesores
        this.cargarProfesores();
    }

    /**
     * Cargar todos los profesores
     */
    async cargarProfesores() {
        try {
            const profesores = await this.modelo.obtenerTodos();
            this.vista.mostrarProfesores(profesores);
        } catch (error) {
            console.error('Error al cargar profesores:', error);
            this.vista.mostrarError('Error al cargar los profesores');
        }
    }

    /**
     * Crear un nuevo profesor
     * @param {Object} datos
     */
    async crearProfesor(datos) {
        try {
            const resultado = await this.modelo.crear(datos);
            
            if (resultado.success) {
                this.vista.mostrarExito('Profesor creado exitosamente');
                this.vista.limpiarFormulario();
                this.cargarProfesores();
            } else {
                this.vista.mostrarError(resultado.message || 'Error al crear el profesor');
            }
        } catch (error) {
            console.error('Error al crear profesor:', error);
            this.vista.mostrarError('Error al crear el profesor');
        }
    }

    /**
     * Actualizar un profesor existente
     * @param {number} id
     * @param {Object} datos
     */
    async actualizarProfesor(id, datos) {
        try {
            const resultado = await this.modelo.actualizar(id, datos);
            
            if (resultado.success) {
                this.vista.mostrarExito('Profesor actualizado exitosamente');
                this.cargarProfesores();
            } else {
                this.vista.mostrarError(resultado.message || 'Error al actualizar el profesor');
            }
        } catch (error) {
            console.error('Error al actualizar profesor:', error);
            this.vista.mostrarError('Error al actualizar el profesor');
        }
    }

    /**
     * Eliminar un profesor
     * @param {number} id
     */
    async eliminarProfesor(id) {
        if (!confirm('¿Estás seguro de que deseas eliminar este profesor?')) {
            return;
        }

        try {
            const resultado = await this.modelo.eliminar(id);
            
            if (resultado.success) {
                this.vista.mostrarExito('Profesor eliminado exitosamente');
                this.cargarProfesores();
            } else {
                this.vista.mostrarError(resultado.message || 'Error al eliminar el profesor');
            }
        } catch (error) {
            console.error('Error al eliminar profesor:', error);
            this.vista.mostrarError('Error al eliminar el profesor');
        }
    }

    /**
     * Validar disponibilidad de email
     * @param {string} email
     */
    async validarEmail(email) {
        try {
            const resultado = await this.modelo.validarEmail(email);
            return resultado.disponible;
        } catch (error) {
            console.error('Error al validar email:', error);
            return false;
        }
    }
}