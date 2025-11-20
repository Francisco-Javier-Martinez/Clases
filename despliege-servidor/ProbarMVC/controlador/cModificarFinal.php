<?php
    require_once __DIR__ . '/../modelo/Mboletin_Usuario.php';
    $usuario = new Boletin_Usuario();
    $mensaje = '';
    $enlace_volver = 'monstrarModificarBorrar.php';
    
    if(!isset($_POST['idioma'])){
        $mensaje = '<h1>Debe seleccionar un idioma</h1>';
        require_once __DIR__ . '/../vista/error.php';
    }elseif(!isset($_POST['animales'])){
        $mensaje = '<h1>Debe seleccionar al menos un animal</h1>';
        require_once __DIR__ . '/../vista/error.php';
    }else{
        $usu = $_POST['idUsuario'];
        $usuario->modificarUsuario($usu);
    }
?>