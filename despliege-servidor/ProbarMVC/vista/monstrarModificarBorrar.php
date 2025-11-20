<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../style.css"/>
        <title>Modificar</title>
    </head>
    <body>
        <header>
            <h1 id="titulo">LISTA DE USUARIOS</h1>
        </header>
        <nav>
            <ul>
                <li><a href="../index.php" class="amenu">Formulario</a></li>
                <li><a href="cMostrar.php" class="amenu">MODIFICAR/BORRAR</a></li>
                <li><a href="CSacarInner.php" class="amenu">Ver usuario/animales</a></li>
            </ul>
        </nav>
        <main>
            <div id="formu">
                <section id="formulario">
                    <h1>Lista de usuarios</h1>
                    <?php
                        echo '<table border="1" cellpadding="10">';
                        echo '<tr><th>Nombre</th><th>Acciones</th></tr>';
                        while($fila=$listaUsuarios->fetch_assoc()){
                            echo '<tr><td>'.$fila['nombreUsuario'].'</td><td>';
                            echo '<a href="cModificar.php?idUsuario='.$fila['idUsuario'].'">Modificar</a> | ';
                            echo '<a href="cConfirmarBorrar.php?idUsuario='.$fila['idUsuario'].'">Borrar</a>';
                            echo '</td></tr>';
                        }
                        echo '</table>';
                    ?>
                </section>
            </div>
        </main>
    </body>
</html>