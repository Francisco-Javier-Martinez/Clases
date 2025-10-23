<?php
    require_once 'recomendaciones.php';//He decido usar require_once ya que si el fichero ha sido ya incluido evita la inclusión del mismo fichero y asi no me da errores como me estaba dando en varios sitios

    $recomendar = new Recomendaciones(); //instancio el objeto de Recomendaciones

    $arrayRecomendados = $recomendar->recogerRecomendaciones(); //llamo a recogerRecomendaciones
    echo '<h1>Primera forma</h1>';
    if($arrayRecomendados){ //si es correcto recorremos el objeto mediante: 
        echo '
        <form>
                <select id="comoConocio" name="comoConocio">';
        while($fila=$arrayRecomendados->fetch_array()){ //fetch_array esto se recorrera hasta que no queden filas y devuelva false
            // fetch_array() me devolvera un array de la fila donde este el puntero.
            // Cada vez que se llama, avanza a la siguiente fila
            echo '<option value="'.$fila['idRecomendacion'] .'">'. $fila['nombre'] .'</option>';
        }
        echo '</select> 
        </form>';
    }
    /* echo '<h1>Segunda forma</h1>';
    if($arrayRecomendados){
        $fila=$arrayRecomendados->fetch_assoc();
        echo '<p>';
        foreach($fila as $indice => $valor){
            echo $indice." : ".$valor."</br></br>";
        }
        echo '</p>';

    } */
?>