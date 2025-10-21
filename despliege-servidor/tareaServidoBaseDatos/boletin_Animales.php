<?php
    require_once 'configBD.php';
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