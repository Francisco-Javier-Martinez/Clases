<?php
    //datos de conesion
    require_once 'configBD.php'; //He decido usar require_once ya que si el fichero ha sido ya incluido evita la inclusión del mismo fichero y asi no me da errores como me estaba dando en varios sitios

    class Animales{
        public function recogerAnimales(){
            mysqli_report(MYSQLI_REPORT_OFF);
            $conexion = new mysqli(SERVIDOR,USUARIO,PASSWORD,BBDD); //instacio el obeto mysqli
            if($conexion->connect_errno){ //si hay error de conexion
                echo "<h1>Error de conexion a la base de datos</h1>";
                return null;
            }
            $sql="SELECT * FROM animales;";
            //echo $sql;
            $animale=$conexion->query($sql);
            if($conexion->errno==1146){ //error de que no existe la tabla me salio y me parecio util probarlo
                echo "<h1> No existe la tabla </h1>";
                $conexion->close();
                return null;
            }
            if($animale->num_rows>0){ //si hay filas las retornos
                $conexion->close();
                return $animale;
            }else{
                echo "<h1> No hay filas</h1>"; 
                $conexion->close();
                return null;
            }
        }
    }
?>