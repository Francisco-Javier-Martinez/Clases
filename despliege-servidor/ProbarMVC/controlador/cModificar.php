<?php
require_once __DIR__ . '/../modelo/Mrecomendaciones.php';
require_once __DIR__ . '/../modelo/Manimales.php';
require_once __DIR__ . '/../modelo/Mboletin_Usuario.php';

$recomendar = new Recomendaciones();
$animal = new Animales();
$usuario = new Boletin_Usuario();

$arrayRecomendados = $recomendar->recogerRecomendaciones();
$arrayAnimales = $animal->recogerAnimales();

$usu = isset($_GET['idUsuario']) ? intval($_GET['idUsuario']) : 0;
if($usu <= 0){
    $mensaje = '<h1>ID de usuario inválido</h1>';
    $enlace_volver = 'cMostrar.php';
    require_once __DIR__ . '/../vista/error.php';
    return;
}

$arraiUsuario = $usuario->monstrarTodasCaracteristacasUsuario($usu);

require_once __DIR__ . '/../vista/modificar.php';
?>
