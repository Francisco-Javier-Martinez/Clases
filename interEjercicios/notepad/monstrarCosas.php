<?php
	require_once 'compras.php';
	require_once 'usuarios.php';
	
	$objCompras= new Compras();
	$listaDeNoCompras =$objCompras->filaInner();
	$objUsu= new Usuarios();
	$listaDeUsuariosEspecificos =$objUsu->sacarTodasEstadisticasUsuariosSeleccionados($_POST['usuarios']);
	
	if($listaDeNoCompras==null){
		echo "<h1>No hay obj disponible</h1>";
	}else{
		while($fila=$listaDeNoCompras->fetch_assoc()){
		echo '<h2>'.$fila['nombreUsuario'].' no hay comprado ningun producto</h2>';
		}
	}
	
	echo '<h1> info de personas especificas</h1>';
	if($listaDeUsuariosEspecificos==null){
		echo "<h1>No hay obj disponible</h1>";
	}else{
		while($fila=$listaDeUsuariosEspecificos->fetch_assoc()){
		echo '<h2>'.$fila['nombre'].' correo '.$fila['correo'].' contraseña: '.$fila['contrasena'].'</h2>';
		}
	}
	
?>