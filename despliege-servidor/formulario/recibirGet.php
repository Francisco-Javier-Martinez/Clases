<?php
    if(empty($_GET['nombre'])){
        echo'<h1>Se envio vacio el campo nombre pero si se creo al ser tipo text </h1>';
    }else{
        echo '<h1>' . $_GET['nombre'] . '</h1>';
    }
    if(empty($_GET['correoElectronico'])){
        echo '<h1>Se envio vacio el campo CorreoElectronico pero si se creo al ser tipo text </h1>';
    }else{
        echo '<h1>' . $_GET['correoElectronico'] . '</h1>';
    }

    if(isset($_GET['idioma'])){
        echo '<h1>' . $_GET['idioma'] . '</h1>';
    } else {
        echo '<h1>No ha seleccionado ningún idioma</h1>';
    }
    // Checkboxes
    $sw=false;
    if(isset($_GET['animales'])){
        foreach($_GET['animales'] as $animal){
            echo '<h1>' . $animal . '</h1>';
            $sw=true;
        }
    }
    if($sw==false){
        echo '<h1>No ha seleccionado ningún animal</h1>';
    }
    
    if(isset($_GET['terminosCondicones'])){
        echo '<h1>'.$_GET['terminosCondicones'].'</h1>';
    } else {
        echo '<h1>No ha aceptado los términos y condiciones</h1>';
    }
    if(isset($_GET['comoConocio'])){
        echo '<h1>'.$_GET['comoConocio'].'</h1>';
    }
    print_r($_GET);
?>