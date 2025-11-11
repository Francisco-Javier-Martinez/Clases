<?php
	require_once 'profesores.php';
	
	//intancio obj de las clases
	$profe= new Profesores();
	$listaProfesores=$profe->sacarProfesores();


?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Formulario</title>
	</head>
	<body>
		<h1>Inscripcion torneo ajedrez</h1>
		<form action="recibir.php" method="POST">
			<div>
				<label for="clase">Clase:</label>
				<input type="text" name="clase" maxlength="6">
			</div>
			<br>
			<div>
				<label for="tutor">Tutor:</label>
				<?php
					if($listaProfesores!=false){
						echo '<select id="tutor" name="tutor">';
						while($fila=$listaProfesores->fetch_assoc()){					
						echo "<option name='tutor'value='".$fila['idProfesor']."'>".$fila['nombre']."";
						}				
						echo '</select>';
					}else{
						echo '<h1>No hay profe disponibles<h1>';
					}
				?>
			</div>
			<br>
			<div>
				<label for="obs">Observaciones:</label>
				<input type="text" name="obs">
			</div>
			<br>
			<div>
				<label for="participa">Participa en organizacion:</label><br>
				<input type="checkbox" name="participa" value="1">
			</div>
			<br>
			<div>
				<label for="alumno[]">Alumnos:</label><br>
				<input type="text" name="alumno[]"><br><br>
				<input type="text" name="alumno[]"><br><br>
				<input type="text" name="alumno[]"><br><br>
				<input type="text" name="alumno[]"><br><br>
			</div>
			<input type="submit" value="ENVIAR">
		</form>
	</body>
</html>