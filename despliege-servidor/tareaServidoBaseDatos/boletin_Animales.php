<?php
    require_once 'conectar.php';//He decido usar require_once ya que si el fichero ha sido ya incluido evita la inclusión del mismo fichero y asi no me da errores como me estaba dando en varios sitios
    class Boletin_animales extends Conectar{
        public function meterAnimalUsuario($usuario,$animal){
			try{
				$sql="INSERT INTO boletin_animales (idUsuario, idAnimales) VALUES (".$usuario.",".$animal.");"; 
				//echo $sql
				$bien=$this->conexion->query($sql);
				if($bien && $this->conexion->affected_rows>0){
					return true;
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