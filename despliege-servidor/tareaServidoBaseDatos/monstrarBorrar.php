<?php
    require_once 'boletin_Usuario.php';
    $usaurios= new Boletin_Usuario();
    $listaUsuarios = $usaurios->sacarUsuarios();


?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Configuracion</title>
    </head>
    <body>
            <form action="borrar.php" method="POST">
                <label for="usarios">Usuarios Disponibles</label>
                <?php
                    if($listaUsuarios!=false){
                        echo '<select id="usarios" name="usarios">';
                        while($fila=$listaUsuarios->fetch_assoc()){
                            echo '<option value="'.$fila['idUsuario'].'">'.$fila['nombreUsuario'].'</option>';
                        }
                        echo '</select>';
                    }
                ?>
                <input type="submit" value="ENVIAR">
            </form>
    </body>
</html>