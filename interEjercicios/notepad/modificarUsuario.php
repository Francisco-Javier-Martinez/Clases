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
		<form action="recogerModificar.php" method="POST" >
			<?php
				if($listaUsuarios!=null){
					while($fila=$listaUsuarios->fetch_assoc()){
						echo '<label for="usuarioModi" >';
						echo '<input type="radio" name="usuarioModi" value="'.$fila['idUsuario'].'">
						'.$fila['nombre'].'</label>';
					}
				}else{
					echo "<h1>No hay obj disponible</h1>";
				}
			?>
			<label for="correoNuevo">correoNuevo</label>
			<input type="text" name="correoNuevo">
			<input type="submit" name="Enviar">
		</form>
	</body>
</html> 