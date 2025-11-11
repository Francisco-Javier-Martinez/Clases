<?php
	require_once 'conectar.php';
	class Inscripciones extends Conectar{
		public function meterInscripcion(){
			try{
				$nombreClase=$_POST['clase'];
				$tutor=$_POST['tutor'];
				$obs=$_POST['obs'];
				$participa=$_POST['participa'];
				
				if($obs==null){
					$obs="NULL";
				}else{
					$obs="'".$obs."'";
				}
				
				$sql="INSERT INTO inscripciones (clase,idTutor,observaciones,participa_organizacion) 
				VALUES ('".$nombreClase."',".$tutor.",".$obs.",".$participa.");";
				//echo $sql;
				$bien=$this->conexion->query($sql);
				if($bien && $this->conexion->affected_rows>0){
					return $this->conexion->insert_id;
				}else{
					echo '<h1>Fallo el registro<h1>';
				}
			}catch(mysqli_sql_exception $e){
				switch($e->getCode()){
					case 1062:
						echo '<h1><a href="index.php">Clase duplicado</a></h1>';
						break;
					default:
						echo '<h1> Code erro:'.$e->getCode().'</h1>';
						echo '<a href="index.php"><h1> Mensaje erro:'.$e->getMessage().'</a></h1>';
				}
			}
		}
		public function sacarInscripciones(){
			try{
				$sql="SELECT profesores.nombre as 'nombreProfe',clase,observaciones,participa_organizacion,inscripciones_alumnos.nombre as 'nombreAlu' 	FROM inscripciones inner join profesores on inscripciones.idTutor=profesores.idProfesor
					inner join inscripciones_alumnos on inscripciones_alumnos.idInscripcion=inscripciones.idInscripcion
                    order by clase;";
			$filasInscripciones=$this->conexion->query($sql);
			if($filasInscripciones->num_rows>0){
					return $filasInscripciones;
				}else{
					return false;
				}
			}catch(mysqli_sql_exception $e){
				echo '<h1> Code erro:'.$e->getCode().'</h1>';
				echo '<a href="index.php"><h1> Mensaje erro:'.$e->getMessage().'</a></h1>';
			}
		
		
		}
	}
?>