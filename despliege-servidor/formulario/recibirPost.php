<?php
    if(empty($_POST['nombre'])){
        echo'<h1>Se envio vacio el campo nombre pero si se creo al ser tipo text </h1>';
    }else{
        echo '<h1>' . $_POST['nombre'] . '</h1>';
    }
    if(empty($_POST['correoElectronico'])){
        echo '<h1>Se envio vacio el campo CorreoElectronico pero si se creo al ser tipo text </h1>';
    }else{
        echo '<h1>' . $_POST['correoElectronico'] . '</h1>';
    }
    if(isset($_POST['idioma'])){
        echo '<h1>' . $_POST['idioma'] . '</h1>';
    } else {
        echo '<h1>No ha seleccionado ningún idioma</h1>';
    }
    // Checkboxes
    $sw=false;
    if(isset($_POST['animales'])){
        foreach($_POST['animales'] as $animal){
            echo '<h1>' . $animal . '</h1>';
            $sw=true;
        }
    }
    if($sw==false){
        echo '<h1>No ha seleccionado ningún animal</h1>';
    }
    
    if(isset($_POST['terminosCondicones'])){
        echo '<h1>'.$_POST['terminosCondicones'].'</h1>';
    } else {
        echo '<h1>No ha aceptado los términos y condiciones</h1>';
    }
    if(isset($_POST['comoConocio'])){
        echo '<h1>'.$_POST['comoConocio'].'</h1>';
    }
    print_r($$_POST);
?>