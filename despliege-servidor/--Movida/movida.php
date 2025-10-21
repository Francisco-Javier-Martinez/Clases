<!DOCTYPE html>
<html>
<head>
    <title>PHP Variables</title>    
    <meta charset="utf-8">
    <link rel="stylesheet" href="movidacss.css">
</head>
<body>
    <header>
        <h1 class="titulo">PHP Variables</h1>
    </header>
    <main>
        <div class="formulario">
            <form action="" method="POST">
                <p>Nombre: 
                    <div class="cajas">
                        <input  type="text" name="nombre">
                    </div>
                </p>
                <p>Edad: <input type="text" name="edad"></p>
                <input  class="enviar" type="submit" value="Enviar">
            </form>
            <?php
                $name = $_POST['nombre'] ?? ''; //valor por defecto
                $edad = $_POST['edad'] ?? 0;
                settype($edad, "int"); //convertir a entero
                //validar que no esten vacios
                if ($name != '' && $edad != 0 && $edad > 0) {
                    echo '<p>Hola, mi nombre es ' . $name . ' y tengo ' . $edad . ' años.</p>';
                } else {
                    echo "<p>Por favor, ingrese su nombre y edad.</p>";
                }
            ?>
        </div>
    </main>
    <footer class="pie_pagina">
        <p>pie de página</p>
    </footer>
</body>
</html>