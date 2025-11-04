<?php
require_once 'conectar.php';//He decido usar require_once ya que si el fichero ha sido ya incluido evita la inclusión del mismo fichero y asi no me da errores como me estaba dando en varios sitios

class Boletin_Usuario extends Conectar{
    // Inserta un usuario y devuelve el id insertado
    public function meterUsuario($nombre, $correo, $idioma, $idRecomendacion, $sugerencia){
        try{
			//Voy a preguntar si es null si lo es guardare "NULL" entre comillas 
			// doble para que se guarde el valor null en la BD 
			//Si no voy a concatenar sugerencia y asi me ahorro hacer dos insert into
			if($sugerencia!=null){
				$sugerencia="'".$sugerencia."'";
			}else{
				$sugerencia="NULL";
			}
			//Consulta de introduccion
			$sql="insert into boletin_usuario (nombreUsuario,correo,idioma,
			idRecomendacion,sugerencias) values('".$nombre."','".$correo."','".$idioma."',".$idRecomendacion.",".$sugerencia.");";
			//echo $sql;
			$bien=$this->conexion->query($sql);//Ejecuto la query
			//Si sale bien uso insert_id para sacar el id para poder hacer la introduccion de animales y usuarios
			//Y hay filas afectadas
			if($bien && $this->conexion->affected_rows>0){
				$idInsertado=$this->conexion->insert_id;
				return $idInsertado;
			}else{
				return false;
			}
		}catch(mysqli_sql_exception $e){
			switch ($e->getCode()) {
				case 1146:
					echo '<h1>La tabla no existe</h1>';
					return false; 
				case 1062:
					echo '<h1>Correo duplicado</h1>';
					return false;
				case 1064:
					echo '<h1>Error de sintaxis en la consulta SQL</h1>';
					return false;
				default:
					echo '<h1>ERROR: ' . $e->getMessage() . '</h1>';
					return false;
			}
		}
    }
}
?>
