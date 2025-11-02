<?php
	require_once 'configBD.php';
	class Conoce_Usuario{
		public function meterConoceUsuarios($id,$conoce){
			try{
				$conexsion= new mysqli(SERVIDOR,USUARIO,PASSWORD,BBDD);
				$sql='insert into conoce_usuario (idUsuario,idConoce) values 
				("'.$id.'","'.$conoce.'");';
				//echo $sql;
				$correcto=$conexsion->query($sql);
				if($correcto){
					return $conexsion->insert_id;
				}else{
					echo '<h1>No se pudo crear el usu_conoce</h1>';
					return false;
				}
			}catch(mysqli_sql_exception $e){
				if($e->getCode()==2002){
					echo'<h1><a href="prueba.php">Error de conexion</a></h1>';
					return null;
				}
			}finally{
				if($conexsion){
				$conexsion->close();
				}
			}
		}
	}
?>