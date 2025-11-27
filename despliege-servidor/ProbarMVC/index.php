<?php
    require_once __DIR__ . '/controlador/controladorUsuario.php';
    
    $controlador = new ControladorUsuario();
    $accion = isset($_GET['accion']) ? $_GET['accion'] : 'formulario';
    
    switch($accion) {
        case 'formulario':
            $controlador->formularioRegistro();
            break;
        case 'recibir':
            $controlador->recibir();
            break;
        case 'listar':
            $controlador->monstrarUsuarioModificarBorrar();
            break;
        case 'sacarInner':
            $controlador->sacarInner();
            break;
        case 'modificar':
            $controlador->modificar();
            break;
        case 'confirmarBorrar':
            $controlador->confirmarBorrar();
            break;
        case 'borrar':
            $controlador->borrar();
            break;
        case 'modificarFinal':
            $controlador->modificarFinal();
            break;
        default:
            $controlador->formularioRegistro();
    }
?>