<?php
    require_once 'boletin_Usuario.php';//He decido usar require_once ya que si el fichero ha sido ya incluido evita la inclusión del mismo fichero y asi no me da errores como me estaba dando en varios sitios
    require_once 'boletin_Animales.php';
    $error = false; //Variable para poder sabir si dejo algo vacio o sin rellenar
    $usuarios = new Boletin_Usuario(); //Estancio el objeto Boletin_Usuario
    $animalUsuario = new Boletin_animales(); //Estancio el objeto Boletin_animal

    if (empty($_POST['nombre'])) {
        echo '<h1>Se envió vacío el campo nombre</h1>';
        $error = true;
    }

    if (empty($_POST['correoElectronico'])) {
        echo '<h1>Se envió vacío el campo correo electrónico</h1>';
        $error = true;
    }

    if (!isset($_POST['idioma'])) {
        echo '<h1>No ha seleccionado ningún idioma</h1>';
        $error = true;
    }

    /* if (!isset($_POST['animales']) || count($_POST['animales']) === 0) {
        echo '<h1>No ha seleccionado ningún animal</h1>';
        $error = true;
    } */
    //Aqui voy a usar una variable porque la manejo mejor si esta vacio guardare el valor null si no el texto
    if(empty($_POST['sugerencia'])){
        $sugerencia=null;
    }else{
        $sugerencia=$_POST['sugerencia'];
    }
    
    if (!isset($_POST['terminosCondicones'])) {
        echo '<h1>No has aceptados los terminos</h1>';
    }

    if (!isset($_POST['comoConocio'])) {
        echo '<h1>No ha seleccionado ninguna recomendación</h1>';
        $error = true;
    }

    if ($error) {
        echo '<a href="indexServidor.php"><h1>volver</h1></a>'; //Si falla algo de arriba monstrara este error
    }else{
		$idUsu = $usuarios->meterUsuario( //Le paso todo los datos necesitarios para registrar al usuario
		$_POST['nombre'],
		$_POST['correoElectronico'],
		$_POST['idioma'],
		$_POST['comoConocio'],
		$sugerencia
		);
		if($idUsu){ // si el id insertado seguimos
			foreach($_POST['animales'] as $valor){ //Realizo un foreach de los animales repitiendo la consulta por cada animal que haya recibido
			$animalUsuario->meterAnimalUsuario($idUsu,$valor); //Llamo a meter animal
		}
		echo '<a href="indexServidor.php"><h1>Todo correcto</h1></a>';
		}else{
			echo '<a href="indexServidor.php"><h1>Ups algo fallo</h1></a>'; //si falla algo la insercion saldra esto
		}
	}
?>