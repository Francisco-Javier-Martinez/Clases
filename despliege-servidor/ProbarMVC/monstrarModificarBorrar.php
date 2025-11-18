<?php
    /*pasar por un a los atributos del usuario y mostrarlos en un formulario para que se puedan modificar*/
    require_once 'boletin_Usuario.php';
    $usaurios= new Boletin_Usuario();
    $listaUsuarios = $usaurios->sacarUsuarios();


?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Modificar</title>
    </head>
    <body>
        <?php
            echo '<h1>Lista de usuarios</h1>';
            while($fila=$listaUsuarios->fetch_assoc()){
                echo '<p>'.$fila['nombreUsuario'].'</p>';
                echo '<a href="modificar.php?idUsuario='.$fila['idUsuario'].'">Modificar   </a>';
                echo '<a href="confirmarBorrar.php?idUsuario='.$fila['idUsuario'].'">Borrar</a>';
                echo'<br><br>';
            }
        ?>
    </body>
</html>