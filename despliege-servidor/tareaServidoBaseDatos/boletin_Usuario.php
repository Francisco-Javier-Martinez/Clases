<?php
require_once 'configBD.php';//He decido usar require_once ya que si el fichero ha sido ya incluido evita la inclusión del mismo fichero y asi no me da errores como me estaba dando en varios sitios

class Boletin_Usuario{
    private $conexion;
    public function __construct(){
        try{
            $this->conexion=new mysqli(SERVIDOR,USUARIO,PASSWORD,BBDD);
        }catch(mysqli_sql_exception $e){
            if($e->getCode()==2002){
                echo '<h1>No se ha podido conectar</h1>';
            }
        }
    }
    // Inserta un usuario y devuelve el id insertado
    public function meterUsuario($nombre, $correo, $idioma, $idRecomendacion, $sugerencia){
        //Voy a preguntar si es null si lo es guardare "NULL" entre comillas 
        // doble para que se guarde el valor null en la BD 
        //Si no voy a concatenar sugerencia y asi me ahorro hacer dos insert into
        //Y asi es mas limpio y rapido el codigo
        if($sugerencia!=null){
            $sugerencia="'".$sugerencia."'";
        }else{
            $sugerencia="NULL";
        }
        //Consulta de introduccion
        $sql="INSERT INTO boletin_usuario (onombreUsuario, crreo, idioma, idRecomendacion, sugerencias) 
                VALUES ('".$nombre."','".$correo."','".$idioma."',".$idRecomendacion.",".$sugerencia.");";
        //echo $sql;
        //Ejecuto la query
        if($this->conexion->query($sql)){
            //Si sale bien uso insert_id para sacar el id para poder hacer la introduccion de animales y usuarios
            $idInsertado = $this->conexion->insert_id;
            $this->conexion->close();
            return $idInsertado; // devuelvo id
        } else {
            $this->conexion->close();//si falla cierro conexion y retorno false
            return false;
        }
    }

    // Valida si existe un correo
    public function validarCorreo($correo){
        //Consulta del correo
        $sql="SELECT * FROM boletin_usuario WHERE correo='".$correo."';";
        $existe=$this->conexion->query($sql);
        //Si hay filas sacadas cierro conexion y devuelvo true porque si existe
        if($existe->num_rows>0){
            $this->conexion->close();
            return true;
        } else {
            $this->conexion->close();
            return false;
        }
    }
}
?>
