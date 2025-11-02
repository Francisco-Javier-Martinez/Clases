<?php
	require_once 'configBD.php';
	class Usuarios{
		public function meterUsuario($nomUsuario,$correo,$contra,$observacion){
			try{
				$conexsion= new mysqli(SERVIDOR,USUARIO,PASSWORD,BBDD);
				if($observacion==null){
					$observacion="NULL";
				}
				$sql='insert into usuarios (nombre,correo,contrasena,observacion) values 
				("'.$nomUsuario.'","'.$correo.'","'.$contra.'",'.$observacion.');';
				//echo $sql;
				$correcto=$conexsion->query($sql);
				if($correcto){
					return $conexsion->insert_id;
				}else{
					echo '<h1>No se pudo crear el usuario</h1>';
					return false;
				}
			}catch(mysqli_sql_exception $e){
				if($e->getCode()==2002){
					echo'<h1><a href="prueba.php">Error de conexion</a></h1>';
					return null;
				}
				if($e->getCode()==1062){
					echo'<h1><a href="prueba.php">Error ese correo ya existe en nuestra BD</a></h1>';
					return null;
				}
			}finally{
				if($conexsion){
				$conexsion->close();
				}
			}
		}
	public function validarCorreo($correo){
		try{
			$conexsion= new mysqli(SERVIDOR,USUARIO,PASSWORD,BBDD);
			$sql='(select * from usuarios where correo="'.$correo.'");';
			$esta=$conexsion->query($sql);
			if($esta->num_rows>0){
				return true;
			}else{
				return false;
			}
		}catch(mysqli_sql_exception $e){
			if($e->getCode()==2002){
					echo'<h1><a href="prueba.php">Error de conexion</a></h1>';
					return null;
				}
			if($e->getCode()==1062){
				echo'<h1><a href="prueba.php">Error ese correo ya existe en nuestra BD</a></h1>';
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