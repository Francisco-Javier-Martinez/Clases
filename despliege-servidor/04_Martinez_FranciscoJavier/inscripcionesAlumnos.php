<?php
	require_once 'conectar.php';
	class InscripcionesAlumnos extends Conectar{
		public function meterInscripcionAlum($idIns,$alum){
			try{
				$sql="INSERT INTO inscripciones_alumnos (idInscripcion,nombre) 
				VALUES (".$idIns.",'".$alum."');";
				//echo $sql;
				$bien=$this->conexion->query($sql);
				if(!$bien && $this->conexion->affected_rows<0){
					echo '<h1>Fallo el registro<h1>';
				}
			}catch(mysqli_sql_exception $e){
				echo '<h1> Code erro:'.$e->getCode().'</h1>';
				echo '<a href="index.php"><h1> Mensaje erro:'.$e->getMessage().'</a></h1>';
			}
		}
	}
?>