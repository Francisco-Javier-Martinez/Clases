<?php
    //datos de conesion
    require 'configBD.php';
    class Boletin_Usuario{
        public function meterUsuario($sql){
            $conexion = new mysqli(SERVIDOR,USUARIO,PASSWORD,BBDD); //instacio el obeto mysqli
            if($conexion->connect_errno){ //si hay error de conexion
                echo "<h1>Error de conexion a la base de datos</h1>";
                return false;
            }
            $conexion->query($sql);
            if($conexion->affected_rows>0){//si hubo filas afectadas devuelvo correcto
                $conexion->close();
                return true;
            }else{
                $conexion->close();
                return false;
            }
        }
        public function validarCorreo($correo){
            $conexion = new mysqli(SERVIDOR,USUARIO,PASSWORD,BBDD); //instacio el obeto mysqli
            if($conexion->connect_errno){ //si hay error de conexion
                echo "<h1>Error de conexion a la base de datos</h1>";
                return false;
            }
            $sql = "SELECT * FROM boletin_usuario WHERE correo='$correo';";

            $existe=$conexion->query($sql);
            if($existe->num_rows>0){
                $conexion->close();
                return true;
            }else{
                $conexion->close();
                return false;
            }
        }
        public function idUsuario($nombre){
            $conexion = new mysqli(SERVIDOR,USUARIO,PASSWORD,BBDD); //instacio el obeto mysqli
            if($conexion->connect_errno){ //si hay error de conexion
                echo "<h1>Error de conexion a la base de datos</h1>";
                $conexion->close();
                return false;
            }
            $sql="SELECT idUsuario FROM boletin_usuario WHERE nombreUsuario=".$nombre.";";
            $id=$conexion->query($sql);
            if($id->num_rows>0){
                $conexion->close();
                return $id;
            }else{
                $conexion->close();
                return false;
            }
        }
    }

?>