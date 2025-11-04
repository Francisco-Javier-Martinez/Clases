<?php
	require_once 'configBD.php';
	class conectar{
		protected $conexion;
		public function __construct(){
			try{
				$this->conexion = new mysqli(SERVIDOR,USUARIO,PASSWORD,BBDD);
			}catch(mysqli_sql_exception $e){
				if($e->getCode()==2002){
					echo"<h1>Error de conexion</h1>";
					return null;
				}
			}
		}
		public function conectar(){
			return $this->conexion;
		}


	}
?>