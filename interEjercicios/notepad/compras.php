<?php
	require_once 'configBD.php';
	class Compras{
		public function registrarCompra($usuario,$obj){
			try{
				$conexion= new mysqli(SERVIDOR,USUARIO,PASSWORD,BBDD);
				$sql='insert into compras (idUsuario,idObjeto) values
				("'.$usuario.'","'.$obj.'");';
				$conexion->query($sql);
				if($conexion){
					return true;
				}else{
					return false;
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
		public function sacarNumeroDeCompras(){
			try{
				$conexion = new mysqli(SERVIDOR,USUARIO,PASSWORD,BBDD);
				$sql='SELECT objetos.nombre AS "nombreObjeto",objetos.precio,objetos.informacion, COUNT(compras.idObjeto) AS "vecesComprado"
						FROM compras
							INNER JOIN objetos
									ON compras.idObjeto = objetos.idObjeto
										GROUP BY objetos.nombre, objetos.precio, objetos.informacion, objetos.idObjeto;';
				$obtCompras=$conexion->query($sql);
				if($obtCompras->num_rows>0){
					return $obtCompras;
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