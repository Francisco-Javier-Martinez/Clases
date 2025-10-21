<?php
require 'configBD.php';

class Boletin_Usuario{

    // Inserta un usuario y devuelve el id insertado
    public function meterUsuario($nombre, $correo, $idioma, $idRecomendacion){
        $conexion = new mysqli(SERVIDOR, USUARIO, PASSWORD, BBDD); //conexion
        //Si da fallo la conexion 
        if($conexion->connect_errno){
            echo "<h1>Error de conexion a la base de datos</h1>";//muentra error
            return false;
        }
        //Consulta de introduccion
        $sql="INSERT INTO boletin_usuario (nombreUsuario, correo, idioma, idRecomendacion)
                VALUES ('$nombre', '$correo', '$idioma', $idRecomendacion);";
        //echo $sql;
        //Ejecuto la query
        if($conexion->query($sql)){
            //Si sale bien uso insert_id para sacar el id para poder hacer la introduccion de animales y usuarios
            $idInsertado = $conexion->insert_id;
            $conexion->close();
            return $idInsertado; // devuelvo id
        } else {
            $conexion->close();//si falla cierro conexion y retorno false
            return false;
        }
    }

    // Valida si existe un correo
    public function validarCorreo($correo){
        $conexion = new mysqli(SERVIDOR, USUARIO, PASSWORD, BBDD);
        if($conexion->connect_errno){
            echo "<h1>Error de conexion a la base de datos</h1>";
            return false;
        }
        //Consulta del correo
        $sql = "SELECT * FROM boletin_usuario WHERE correo='$correo';";
        $existe = $conexion->query($sql);
        //Si hay filas sacadas cierro conexion y devuelvo true porque si existe
        if($existe->num_rows > 0){
            $conexion->close();
            return true;
        } else {
            $conexion->close();
            return false;
        }
    }
}
?>
