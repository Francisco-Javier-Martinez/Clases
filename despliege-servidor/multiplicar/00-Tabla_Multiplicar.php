<?php
//variable
    settype($numero, "int");
    $numero = $_GET['numero'] ?? '';

//Crear array
    function tablaMultiplicar( $numero ){
        $tabla = array();
        for($i=0; $i<=10; $i++){
            $tabla[$i] = $numero * $i;
        }
        return $tabla;
    }

    function monstraTabla($numero, $tabla){        
        //Tabla
        //Tabla de Multiplicar
            print_r($tabla); //muestra el array
            echo "<br>";
            var_dump($tabla); //muestra el array con más detalles
        //Con foreach
        //Eliminar
        unset($tabla[0]); //elimina el elemento en la posición 0
        foreach($tabla as $indice => $contenido){
            echo '<tr> 
                    <td>' . $numero . '</td>
                    <td> x </td>
                    <td>' . $indice .'</td>
                    <td> = </td>
                    <td> ' .$contenido.'</td>
                </tr>';
        }
    }

?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Tabla de Multiplicar</title>
</head>
<body>
    <h1>Tabla de Multiplicar</h1>
    <form action="" method="get">
        <input type=number name="numero"/>
        <input type=submit value="Enviar"/>
        <br/>
    </form>  
    <table border="1">
    <?php
        if(isset($_GET['numero']) && $_GET['numero'] !==''){
            $tablaMultiplicar = tablaMultiplicar($numero);
            monstraTabla($numero, $tablaMultiplicar);
        }else{
            echo "<p>error:Pon numero</p>";
        }
    ?>
    </table>

</body>
</html>