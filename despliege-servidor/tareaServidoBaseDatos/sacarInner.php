<?php
	require_once 'boletin_Animales.php';
	
	$animalesUsuarios= new Boletin_animales();
	
	$arrayAnimalesUsuario = $animalesUsuarios->sacarUsuarioAnimal();
	$nombre="paco";
	while($fila=$arrayAnimalesUsuario->fetch_assoc()){
		if($fila["nomUsu"]!=$nombre){
			$nombre=$fila["nomUsu"];
			echo '<h1> Usuario:'.$fila["nomUsu"].'</h1>';
		}
		echo '<h2> Lista de animales: '.$fila['nomAni'].'</h1>';
	}
?>