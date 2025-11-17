<?php
    include_once 'usuario.php';

    $usuario=new Usuario();
    $resultado=$usuario->comprobarUsuario();

    if($resultado!=false){
        $fila=$resultado->fetch_assoc();
        echo '<h1>Bienvenido usuario: '.$fila['nombre'].'</h1>';
    }else{
        echo '<h1>Usuario o contraseña incorrectos</h1>';
        echo '<h4>Se te redirigirá al formulario de login en 3 segundos</h4>';
        header("refresh:3;url=index.html");
    }
    

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Inicio</title>
</head>
<body>
    
</body>
</html>