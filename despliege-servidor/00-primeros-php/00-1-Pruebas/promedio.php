<?php  
//araid
    $colores = array("azul", "rojo", "verde");
    $colores[2] = "naranja"; //modificar valor
    $colores[] = "amarillo"; //añadir al final

    //recorrer array
    for($i =0 ; $i<4; $i++){
        echo "<p>$colores[$i]</p>";
    }
?>

<?php
//array asociativo
    $datos["nombre"] = "Juan";
    $datos["edad"] = 30;

    print_r($datos);

    foreach($datos as $indice => $valor){
        echo "<p>$indice : $valor</p>";
    }
?>

<?php
//array multidimensional   
    $datos = 
    array(
            array("nombre" => "Juan", "edad" => 30),
            array("nombre" => "Ana", "edad" => 25)
        );
    foreach($datos as $persona){
        echo '<p>Nombre:'. $persona["nombre"] . ' Edad: ' . $persona["edad"] . '</p>';
    }
?>

<?php
//funciones para arrays
    //count
    $colores = array("azul", "rojo", "verde");
    for($i = 0; $i <count($colores); $i++){
        echo "<p>$colores[$i]</p>";
    }
    //unset
    unset($colores[1]); //elimina el elemento en la posición 1
    
?>