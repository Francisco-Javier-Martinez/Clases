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
                echo '<a href="index.php?action=modificar&idUsuario='.$fila['idUsuario'].'">Modificar   </a>';
                echo '<a href="index.php?action=confirmarBorrar&idUsuario='.$fila['idUsuario'].'">Borrar</a>';
                echo'<br><br>';
            }
        ?>
    </body>
</html>