<?php
require_once __DIR__ . '/controlador/controladorUsuario.php';
$controlador = new ControladorUsuario();
$datos = $controlador->formularioRegistro();
require_once __DIR__ . '/vista/indexServidor.php';
?>
