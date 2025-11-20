<?php
    require_once __DIR__ . '/../modelo/Mboletin_Usuario.php';
    $boletinUsuario= new Boletin_Usuario();
    $usu=$_GET['idUsuario'];
    $boletinUsuario->borrarUsuario($usu);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Configuracion</title>
</head>
<body>
    
</body>
</html>