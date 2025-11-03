<?php 
	require_once 'usuarios.php';
	require_once 'compras.php';
	require_once 'conoce_Usuario.php';
	
	$obtUsuario = new Usuarios();
	$obtCompras = new Compras();
	$objConoce = new Conoce_Usuario();
	
	$error=false;
	if(empty($_POST['nombreUsuario'])){
        echo '<h1>Se envió vacío el campo nombre</h1>';
		$error=true;
	}
	if (empty($_POST['correo'])) {
        echo '<h1>Se envió vacío el campo Correo Electrónico.</h1>';
		$error=true;
    }
	if(empty($_POST['edad'])){
		echo '<h1>Se envió vacío el campo edad.</h1>';
        $error = true;
	}
	if (empty($_POST['contrasena'])) {
        echo '<h1>Se envió vacío el campo Contraseña.</h1>';
        $error = true;
    }
	
	if(!isset($_POST['obt'])){
		echo '<h1>No ha seleccionado ningun objeto</h1>';
        $error = true;
	}
	
	if(!isset($_POST['conoce'])){
		echo '<h1>No ha seleccionado ningun conoce</h1>';
        $error = true;
	}
	
	if(empty($_POST['obs'])){
		$observacion=null;
	}else{
		$observacion="'".$_POST['obs']."'";
	}

	if($error){
		echo '<a href="prueba.php"><h1>volver</h1></a>';
	}else{
		if($obtUsuario->validarCorreo($_POST['correo'])){
			echo'<h1><a href="prueba.php">Error correo existente</a></h1>';
		}else{
			$id=$obtUsuario->meterUsuario($_POST['nombreUsuario'],$_POST['correo']
			,$_POST['contrasena'],$observacion,$_POST['edad']);
			if($id){
				$obtCompras->registrarCompra($id,$_POST['obt']);
				foreach($_POST['conoce'] as $valor){
					$objConoce->meterConoceUsuarios($id,$valor);
				}
				echo '<a href="prueba.php"><h1>Todo correcto</h1></a>';
			}else{
				echo '<a href="prueba.php"><h1>Algo fallo</h1></a>';
			}
		}
	}
?>