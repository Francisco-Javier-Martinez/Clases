<?php
    require_once 'boletin_Usuario.php';
    $usuario = new Boletin_Usuario();
    if(!isset($_POST['idioma'])){
        echo '<h1><a href="indexServidor.php">Debe seleccionar un idioma</a></h1>';
    }elseif(!isset($_POST['animales'])){
        echo '<h1><a href="indexServidor.php">Debe seleccionar al menos un animal</a></h1>';
    }else{
        $usu = $_POST['idUsuario'];
        $usuario->modificarUsuario($usu);
    }
?>