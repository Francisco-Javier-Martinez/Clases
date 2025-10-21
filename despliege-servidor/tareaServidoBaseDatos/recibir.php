<?php
    require 'boletin_Usuario.php';
    require 'boletin_Animales.php';
    $error = false;
    $usuarios = new Boletin_Usuario();
    $animalUsuario = new Boletin_animales();

    if (empty($_POST['nombre'])) {
        echo '<h1>Se envió vacío el campo nombre</h1>';
        $error = true;
    }

    if (empty($_POST['correoElectronico'])) {
        echo '<h1>Se envió vacío el campo correo electrónico</h1>';
        $error = true;
    }

    if (!isset($_POST['idioma'])) {
        echo '<h1>No ha seleccionado ningún idioma</h1>';
        $error = true;
    }

    if (!isset($_POST['animales']) || count($_POST['animales']) === 0) {
        echo '<h1>No ha seleccionado ningún animal</h1>';
        $error = true;
    }

    if (!isset($_POST['terminosCondicones'])) {
        echo '<h1>No has aceptados los terminos</h1>';
        $error = true;
    }

    if (!isset($_POST['comoConocio'])) {
        echo '<h1>No ha seleccionado ninguna recomendación</h1>';
        $error = true;
    }

    if ($error) {
        echo '<a href="indexServidor.php"><h1>volver</h1></a>';
    }else{
        if($mesanje=$usuarios->validarCorreo($_POST['correoElectronico'])){ //valido que ese correo no exista
            echo '<a href="indexServidor.php"><h1> Correo existente </h1></a> ';
        }else{
            $sql='insert into boletin_usuario (nombreUsuario,correo,idioma,idRecomendacion) values("'.$_POST['nombre'].'","'.$_POST['correoElectronico'].'","'.$_POST['idioma'].'",'.$_POST['comoConocio'].');';
            //echo $sql
            //inserto el usuarioA';
            $idUsu=$usuarios->idUsuario($_POST['nombre']);
            foreach($_POST['animales'] as $valor){
                $sql2='insert into  boletin_Animales values('.$idUsu.','.$valor.');';
                $animalUsuario->meterAnimalUsuario($sql2);
            }
            if($mesanje==true){
                echo '<a href="indexServidor.php"><h1>Todo correcto</h1></a>';
            }else{
                echo '<a href="indexServidor.php"><h1>Ups algo fallo</h1></a>';
            }
        }
    }
?>