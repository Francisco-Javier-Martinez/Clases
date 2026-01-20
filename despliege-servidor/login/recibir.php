<?php
    include_once 'usuario.php';

    $usuario=new Usuario();
    if(isset($_POST['preparadas'])){
        $resultado=$usuario->comprobarSeguro();
    }else{
        $resultado=$usuario->comprobarUsuario();
    }
    $mensaje="";
    $mensaje1="";
    if($resultado!=false){
        $fila=$resultado->fetch_assoc();
        $mensaje= '<h1>Bienvenido usuario: '.$fila['nombre'].'</h1>';
            $mensaje1= '<h4>Eres administrador. Se te redirigirá al panel de administración
            mira el contenido exclusivo para administradores</h4>';
    }else{
        $mensaje= '<h1>Usuario o contraseña incorrectos</h1>';
        $mensaje1= '<h4>Se te redirigirá al formulario de login en 3 segundos</h4>';
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
    <?php
        if($mensaje1!=""){
            echo $mensaje;
            echo $mensaje1;
        }else{
            echo $mensaje;
        }
    ?>
</body>
</html>