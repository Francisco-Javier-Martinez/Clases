<?php
	require_once "configBD.php";
	class Objeto{
		public function recogerObjetos(){
		try{
			$conexion = new mysqli(SERVIDOR,USUARIO,PASSWORD,BBDD);
			$sql="Select * FROM Objetos;";
			$listaObjeto= $conexion->query($sql);
			
			if($listaObjeto->num_rows>0){
				return $listaObjeto;
			}else{
				echo"<h1>No hay filas</h1>";
				return null;
			}
		}catch(mysqli_sql_exception $e){
			if($e->getCode()==2002){
				echo"<h1>Error de conexion</h1>";
				return null;
			}
			if($e->getCode()==1146){
                echo "<h1> No existe la tabla </h1>";
                return null;
            }
		}finally{
				if($conexion){
					$conexion->close();
				}
		}
	}
}
?>