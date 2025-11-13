<?php
    require_once 'boletin_Usuario.php';
    //Recoger el id del usuario a modificar
    $usu=$_GET['idUsuario'];
    $usuario = new Boletin_Usuario();
    $arraiUsuario=$usuario->monstrarTodasCaracteristacasUsuario($usu);


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmacion</title>
</head>
<body>
    <?php 
        $filaUsuario=$arraiUsuario->fetch_assoc();
        echo '<h1>¿Estas seguro de que quieres borrar al usuario '.$filaUsuario['nombreUsuario'].' con este correo: '.$filaUsuario['correo'].'? </h1>';
        echo '<h4>No podras revertir cambios al decir que si</h4>';
        echo '<a href="borrar.php?idUsuario='.$filaUsuario['idUsuario'].'">SI</a>   ';
        echo '<a href="monstrarModificarBorrar.php">NO</a>';
    ?>
</body>
</html>