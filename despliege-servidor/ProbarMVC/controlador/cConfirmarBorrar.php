<?php
// Controlador: Confirmación de borrado
require_once __DIR__ . '/../modelo/Mboletin_Usuario.php';

$usu = isset($_GET['idUsuario']) ? intval($_GET['idUsuario']) : 0;
if($usu <= 0){
    $mensaje = '<h1>ID de usuario inválido</h1>';
    $enlace_volver = 'cMostrar.php';
    require_once __DIR__ . '/../vista/error.php';
    return;
}

$usuario = new Boletin_Usuario();
$arraiUsuario = $usuario->monstrarTodasCaracteristacasUsuario($usu);

require_once __DIR__ . '/../vista/confirmarBorrar.php';
?>
