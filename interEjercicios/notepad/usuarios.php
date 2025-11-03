<?php
	require_once 'configBD.php';
	class Usuarios{
		private $conexsion;
		public function __construct(){
			try{
				$this->conexsion= new mysqli(SERVIDOR,USUARIO,PASSWORD,BBDD);
			}catch(mysqli_sql_exception $e){
				if($e->getCode()==2002){
					echo'<h1><a href="prueba.php">Error de conexion</a></h1>';
					return null;
				}
			}
		}
		public function meterUsuario($nomUsuario,$correo,$contra,$observacion,$edad){
			try{
				
				if($observacion==null){
					$observacion="NULL";
				}
				$sql='insert into usuarios (nombre,correo,contrasena,observacion,edad) values 
				("'.$nomUsuario.'","'.$correo.'","'.$contra.'",'.$observacion.','.$edad.');';
				//echo $sql;
				$correcto=$this->conexsion->query($sql);
				if($correcto){
					return $this->conexsion->insert_id;
				}else{
					echo '<h1>No se pudo crear el usuario</h1>';
					return false;
				}
			}catch(mysqli_sql_exception $e){
				if($e->getCode()==1062){
					echo'<h1><a href="prueba.php">Error ese correo ya existe en nuestra BD</a></h1>';
					return null;
				}
			}
		}
	public function validarCorreo($correo){
		try{ 
			$this->conexsion= new mysqli(SERVIDOR,USUARIO,PASSWORD,BBDD);
			$sql='(select * from usuarios where correo="'.$correo.'");';
			$esta=$this->conexsion->query($sql);
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
		}
	}
	public function sacarUsuarios(){
		try{
			$sql='SELECT idUsuario,nombre 
				from usuarios;';
			$usuariosLista=$this->conexsion->query($sql);
			if($usuariosLista->num_rows>0){
				return $usuariosLista;
			}else{
				return false;
			}
		}catch(mysqli_sql_exception $e){
			if($e->getCode()==1146){
				echo "<h1> No existe la tabla </h1>";
				return null;
			}
		}
	}
	public function sacarTodasEstadisticasUsuariosSeleccionados($arraiAlumnos){
		try{
			$datosIn=''; //incializo 
			foreach($arraiAlumnos as $valor){
				$id= $valor; //id primer indice 1ºEj: $1=1;  eje 2º $2=2
				if(!empty($datosIn)){ //si no esta vacio concateno 
					$datosIn=$datosIn.','; //le pongo la , ej 2º $1,
				}
				$datosIn=$datosIn.$id; //concateno ej 1º :$1 ej 2º $1,2
			}
			$sql='SELECT * 
				from usuarios
					WHERE idUsuario in ('.$datosIn.');';
			$usuariosEspecifico=$this->conexsion->query($sql);
			if($usuariosEspecifico->num_rows>0){
				return $usuariosEspecifico;
			}else{
				return false;
			}
		}catch(mysqli_sql_exception $e){
			if($e->getCode()==1146){
				echo "<h1> No existe la tabla </h1>";
				return null;
			}
		}
	}
	public function modificar($usuarioModificar,$nuevoCorreo){
		try{
			$sql='select * from usuarios where idUsuario='.$usuarioModificar.';';
			$datosDelUsuario=$this->conexsion->query($sql);
			if($datosDelUsuario->num_rows>0){
				$datosUsuario = $datosDelUsuario->fetch_assoc();
				$sql2='update usuarios
							set correo="'.$nuevoCorreo.'"
								where idUsuario='.$datosUsuario['idUsuario'].';';
				$correcto=$this->conexsion->query($sql2);
				if($correcto){
					echo '<h1>Cambio modifcado correcto</h1>';
				}else{
					echo '<h1>Cambio no modifcado</h1>';
				}
			}else{
				echo '<h1>No existe alumno a modificar<h1';
			}
		}catch(mysqli_sql_exception $e){
			echo '<h1>'. $e->getCode().'</h1>';
			echo '<h1>'. $e->getMessage().'</h1>';
			if($e->getCode()){
				echo 'correo ya existente';
			}
		}
	}
	}
?>