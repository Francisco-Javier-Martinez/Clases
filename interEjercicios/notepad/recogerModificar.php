<?php
	require_once 'usuarios.php';
	$objUsu= new Usuarios();
	$fallo=false;
	if(!isset($_POST['usuarioModi'])){
		echo '<h1>No has selecionado usuario</h1>';
		$fallo=true;
	}
	if(empty($_POST['correoNuevo'])){
		echo '<h1> no ha puesto un correo para modificar</h1>';
		$fallo=true;
	}
	if(!$fallo){
		$objUsu->modificar($_POST['usuarioModi'],$_POST['correoNuevo']);
	}else{
		echo '<h1> <a href="modificarUsuario.php">Vuelve a intentarlo</a></h1>';
	}
	
?>