<?php
	require_once 'inscripciones.php';
	
	//intancio obj de las clases
	$inscripcione= new Inscripciones();
	$listaInscrip=$inscripcione->sacarInscripciones();


?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Inscripciones</title>
	</head>
	<body>
		<h1>Inscripciones</h1>
		<?php
			if($listaInscrip==false){
				echo '<h1>No tenemos inscripciones disponibles</h1>';
			}else{
				$nombre='';
				while($fila=$listaInscrip->fetch_assoc()){	
					if($nombre!=$fila['clase']){
						echo '<p>Clase: '.$fila['clase'].'</p>';
						echo '<p>Profesor: '.$fila['nombreProfe'].'</p>';
						if($fila['observaciones']!=null){
							echo '<p>Observaciones: '.$fila['observaciones'].'</p>';
						}
						if($fila['participa_organizacion']!=false){
							echo '<p>Si paticipa</p>';
						}else{
							echo '<p>No paticipa</p>';
						}
						$nombre=$fila['clase'];
					}
					echo '<p>Alumno que participa: '.$fila['nombreAlu'].'</p>';
				}
			}
		
		?>
	</body>
</html>