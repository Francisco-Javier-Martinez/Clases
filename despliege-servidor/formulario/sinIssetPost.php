<?php
    echo '<h1>' . $_POST['nombre'] . '</h1>';
    echo '<h1>' . $_POST['correoElectronico'] . '</h1>';
    echo '<h1>' . $_POST['idioma'] . '</h1>';
    // Checkboxes
    foreach($_POST['animales'] as $animal){
        echo '<h1>' . $animal . '</h1>';
    }
    echo '<h1>' . $_POST['terminosCondicones'] . '</h1>';
    echo '<h1>' . $_POST['comoConocio'] . '</h1>';
?>