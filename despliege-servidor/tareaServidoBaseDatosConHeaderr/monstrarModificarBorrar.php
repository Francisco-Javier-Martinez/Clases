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
                echo '<a href="redireccion.php?idUsuario='.$fila['idUsuario'].'&tipo=modificar">Modificar     </a>';
                echo '<a href="redireccion.php?idUsuario='.$fila['idUsuario'].'&tipo=borrar">Borrar</a>';
            }
        ?>
    </body>
</html>