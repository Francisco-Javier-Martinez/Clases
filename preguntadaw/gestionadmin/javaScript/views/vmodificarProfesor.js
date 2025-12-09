
//Controlador para la vista de modificar profesores o borrar acceso
import { CProfesores } from '../controllers/cProfesores.js';
export class VmodificarProfesores {
    constructor() {
        // Instanciar el controlador
        this.controlador = new CProfesores();
        // Recoger elementos del formulario
        this.inputUserName = document.getElementById('userName');
        this.inputEmail = document.getElementById('email');
        this.inputPassword = document.getElementById('password');
        this.inputPasswordConfirm = document.getElementById('password-confirm');

        //Errores
        this.errorUserName = document.getElementById('error-userName');
        this.errorEmail = document.getElementById('error-email');
        this.errorPassword = document.getElementById('error-password');
        this.errorPasswordConfirm = document.getElementById('error-password-confirm');

        // Elementos de acción
        this.formModificarUsuario = document.getElementById('modificarUsuario');
        this.borrarAccesoBtn = document.getElementById('borrarAccesoBtn');

        // Manejar envío del formulario de modificación
        this.formModificarUsuario.addEventListener('submit', (e) => this.manejarEnvio(e));
        
        // Manejar el clic en el botón de borrar acceso
        if (this.borrarAccesoBtn) {
            this.borrarAccesoBtn.addEventListener('click', (e) => this.manejarBorrarAcceso(e));
        }
    }
    
    // Método auxiliar para mostrar el error visualmente
    mostrarError(inputElement, errorElement, mensaje) {
        // Verifica si el elemento existe antes de manipularlo
        if (inputElement) inputElement.style.border = '2px solid red';
        if (errorElement) {
            errorElement.style.color = 'red';
            errorElement.style.paddingTop = '5px';
            errorElement.textContent = mensaje;
        }
    }

    // Método para limpiar los errores visuales
    limpiarError(inputElement, errorElement) {
        if (inputElement) inputElement.style.border = '1px solid #ced4da'; 
        if (errorElement) errorElement.textContent = '';
    }

    // Método que maneja el envío del formulario de modificación
    manejarEnvio(e) {
        e.preventDefault(); // Detiene el envío

        if (this.validarFormulario()) {

        } else {
            console.log("Formulario de Modificación inválido");
        }
    }
    
    // Método que maneja el clic en el botón de BORRAR ACCESO
    manejarBorrarAcceso(e) {
        e.preventDefault();
        if (confirm('¿Estás seguro de que deseas borrar el acceso de este administrador? Esta acción es irreversible.')) {
            const profesorId = this.borrarAccesoBtn.getAttribute('data-profesor-id');
            this.controlador.borrarAccesoProfesor(profesorId);
        }
    }

    // Este método valida el formulario, adaptado para la modificación
    validarFormulario() {
        let formularioValido = true;
        // Limpiar todos los errores al inicio de la validación
        this.limpiarError(this.inputUserName, this.errorUserName);
        this.limpiarError(this.inputEmail, this.errorEmail);
        this.limpiarError(this.inputPassword, this.errorPassword);
        this.limpiarError(this.inputPasswordConfirm, this.errorPasswordConfirm);

        //Validar Nombre de Usuario
        const userNameValue = this.inputUserName.value.trim();
        if (userNameValue.length < 2 || userNameValue.length > 50) {
            this.mostrarError(
                this.inputUserName,
                this.errorUserName,
                'El nombre de usuario debe tener entre 2 y 50 caracteres.'
            );
            formularioValido = false;
        }

        //Validar Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(this.inputEmail.value.trim())) {
            this.mostrarError(
                this.inputEmail, 
                this.errorEmail, 
                'El correo electrónico no es válido.'
            );
            formularioValido = false;
        }

        //Validar Contraseña (Solo si se va a modificar)
        const passwordValue = this.inputPassword.value;
        const passwordConfirmValue = this.inputPasswordConfirm.value;
        
        // Si el campo de contraseña no está vacío, validamos la contraseña y la confirmación
        if (passwordValue !== '' || passwordConfirmValue !== '') {
            const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&+*-])[A-Za-z\d@$!%*?&+*-]{8,15}$/;
            
            if (!passwordPattern.test(passwordValue)) {
                this.mostrarError(
                    this.inputPassword, 
                    this.errorPassword,
                    'La contraseña debe tener entre 8 y 15 caracteres, incluyendo al menos una mayúscula, una minúscula, un número y un carácter especial.'
                );
                formularioValido = false;
            }
            
            // 4. Validar que las contraseñas coincidan
            if (passwordValue !== passwordConfirmValue) {
                this.mostrarError(
                    this.inputPasswordConfirm, 
                    this.errorPasswordConfirm, 
                    'Las contraseñas no coinciden.'
                );
                formularioValido = false;
            }
        }
        
        // NOTA: Si los campos de contraseña están vacíos, se asume que no se quiere cambiar
        // y la validación de la contraseña se omite, pero el resto de campos (usuario, email) se validan.
        
        return formularioValido;
    }
}