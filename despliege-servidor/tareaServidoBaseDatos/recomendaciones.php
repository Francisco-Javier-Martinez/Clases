<?php
    //datos de conesion
    require 'configBD.php';
    class Recomendaciones{
        public function recogerRecomendaciones(){
            mysqli_report(MYSQLI_REPORT_OFF); //apargar los errores fatales esto sera mejor cuando use try y cacht
            $conexion = new mysqli(SERVIDOR,USUARIO,PASSWORD,BBDD); //instacio el obeto mysqli
            if($conexion->connect_errno){ //si hay error de conexion
                $conexion->close();
                echo "<h1>Error de conexion a la base de datos</h1>";
                return null;
            }
            $sql = "SELECT * FROM recomendaciones"; //select para recoger los datos
            //hago un echo para saber que me saca
            //echo $sql;
            $recomenArray = $conexion->query($sql);
            if($conexion->errno==1146){ //error de que no existe la tabla me salio y me parecio util probarlo
                echo "<h1> No existe la tabla </h1>";
                $conexion->close();
                return null;
            }
            if($recomenArray->num_rows>0){ //si num_rows me devuleve que si ha traido filas es que hay si no saco mensaje
                $conexion->close();
                return $recomenArray; //retorno el objeto con las filas
            }else{
                echo "<h1> No hay filas</h1>";
                $conexion->close();
                return null;
            }
        }
    } 
?>