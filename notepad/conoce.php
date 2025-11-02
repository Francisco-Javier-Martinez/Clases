<?php
	require_once "configBD.php";
	class Conoce{
		public function recogerConoce(){
		try{
			$conexion = new mysqli(SERVIDOR,USUARIO,PASSWORD,BBDD);
			$sql="Select * FROM conoce;";
			$listaConocer= $conexion->query($sql);
			
			if($listaConocer->num_rows>0){
				return $listaConocer;
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