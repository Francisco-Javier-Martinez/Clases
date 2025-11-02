<?php
    echo '<h1>' . $_GET['nombre'] . '</h1>';
    echo '<h1>' . $_GET['correoElectronico'] . '</h1>';
    echo '<h1>' . $_GET['idioma'] . '</h1>';
    // Checkboxes
    foreach($_GET['animales'] as $animal){
        echo '<h1>' . $animal . '</h1>';
    }
    echo '<h1>' . $_GET['terminosCondicones'] . '</h1>';
    echo '<h1>' . $_GET['comoConocio'] . '</h1>';
    print_r($_GET);
?>