<?php
	require_once 'configBD.php';
	class Conectar{
		protected $conexion;
		
		public function __construct(){
			try{
				$this->conexion= new mysqli(SERVIDOR,USUARIO,PASSWORD,BBDD);
			}catch(mysqli_sql_exception $e){
				if($e->getCode()==2002){
					echo '<h1>Erro al conectar</h1>';
				}
			}
		}
	
		public function conectar(){
			return $this->conexion;
		}
	
	}
?>