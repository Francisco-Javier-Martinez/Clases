<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Monstrar preguntas</title>
</head>
<body>
    <?php
        foreach($datos as $pregunta){
            //sacar todos los datos de la pregunta
            echo "<h3>Pregunta número: " . $pregunta['nPregunta'] . "</h3>";
            echo "<p>Texto de la pregunta: " . $pregunta['titulo'] . "</p>";
            if(!empty($pregunta['nombreImagen'])){
                echo "<p>Imagen de la pregunta: <br><img src='../../imagenesPreguntas/" . $pregunta['nombreImagen'] . "' alt='Imagen de la pregunta' width='200'></p>";
            }else{
                echo "<p>No hay imagen para esta pregunta.</p>";
            }
            echo "<p>Puntuación de la pregunta: " . $pregunta['puntuacion'] . "</p>";
        }
    ?>
</body>
</html>