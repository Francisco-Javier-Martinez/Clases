<?php
	require_once 'usuarios.php';
	$usu=new Usuarios();
	$listaUsuarios=$usu->sacarUsuarios();

?>
<!DOCTYPE html>
<html>
	<head>
		<title>Hei</title>
	</head>
	<body>
		<form action="monstrarCosas.php" method="POST" >
			<?php
				if($listaUsuarios!=null){
					while($fila=$listaUsuarios->fetch_assoc()){
						echo '<label for="usuarios[]" >';
						echo '<input type="checkbox" name="usuarios[]" value="'.$fila['idUsuario'].'">
						'.$fila['nombre'].'</label>';
					}
				}else{
					echo "<h1>No hay obj disponible</h1>";
				}
			?>
			<input type="submit" name="Enviar">
		</form>
	</body>
</html> 