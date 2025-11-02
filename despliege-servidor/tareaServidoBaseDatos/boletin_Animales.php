<?php
    require_once 'configBD.php';//He decido usar require_once ya que si el fichero ha sido ya incluido evita la inclusión del mismo fichero y asi no me da errores como me estaba dando en varios sitios
    class Boletin_animales{
        public function meterAnimalUsuario($sql){
            $conexion= new mysqli(SERVIDOR,USUARIO,PASSWORD,BBDD);
            if($conexion->connect_errno){ //si hay error de conexion
                echo "<h1>Error de conexion a la base de datos</h1>";
                $conexion->close();
            }
            $conexion->query($sql);
        }
    }
?>