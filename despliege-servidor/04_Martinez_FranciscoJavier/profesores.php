<?php
	require_once 'conectar.php';
	class Profesores extends Conectar{
		
		public function sacarProfesores(){
			try{
				$sql="SELECT * FROM profesores";
				$filasProfesores=$this->conexion->query($sql);
				if($filasProfesores->num_rows>0){
					return $filasProfesores;
				}else{
					return false;
				}
			}catch(mysqli_sql_exception $e){
				echo '<h1> Code erro:'.$e->getCode().'</h1>';
				echo '<h1> Mensaje erro:'.$e->getMessage().'</h1>';
			}
		}
	}
?>