<?php
	require_once 'inscripciones.php';
	require_once 'inscripcionesAlumnos.php';
	$inscrip = new Inscripciones();
	$inscripAlu= new InscripcionesAlumnos();
	
	
	$error=false;
	if(empty($_POST['clase'])){
		$error=true;
		echo '<h1> No has rellenado la clase <h1>';
	}
	
	if(!isset($_POST['tutor'])){
		$error=true;
		echo '<h1> no has seleccionado tutor</h1>';
	}
	
	if(empty($_POST['obs'])){
		$_POST['obs']=null;
	}
	
	if(!isset($_POST['participa'])){
		$_POST['participa']=0;
	}
	
	if(empty($_POST['alumno'])){
		$error=true;
		echo '<h1> Minimo 1 alumno</h1>';
	}
	
	if(!$error){
		$idIns=$inscrip->meterInscripcion();
		if($idIns){
			foreach($_POST['alumno'] as $valor){
				if($valor!=""){
					$inscripAlu->meterInscripcionAlum($idIns,$valor);
				}
			}
		echo '<a href="index.php"><h1> Correcto</a><h1>';
		}
	}else{
		echo '<a href="index.php"><h1> Vuevlev</a><h1>';
	}
	
?>