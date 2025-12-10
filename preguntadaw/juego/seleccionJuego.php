<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Juegos Disponibles</title>
    <link rel="stylesheet" href="css/seleccionJuego.css">
</head>

<body>

<header>
    <h1>BIENVENIDO, +nombreJugador</h1>
</header>

<main>

    <h2>JUEGOS DISPONIBLES</h2>
    
    <?php
        if(isset($mensajeError) && $mensajeError !== ''){
            echo "<p class='mensaje-error'>" . htmlspecialchars($mensajeError) . "</p>";
        }else if(!empty($controlador->juegos)){
            echo "<section class='grid-juegos'>";
            foreach($controlador->juegos as $juego){
                $temas = explode('|', $juego['temas_nombres']);
                echo "<div class='tarjeta'>";
                echo "  <div class='tarjeta-header'>";
                echo "    <h3>" . htmlspecialchars($juego['titulo']) . "</h3>";
                echo "    <span class='estado'>Público</span>";
                echo "  </div>";
                echo "  <div class='temas'>";
                foreach($temas as $tema){
                    echo "<button>" . htmlspecialchars(trim($tema)) . "</button>";
                }
                echo "  </div>";
                echo "  <button class='jugar'>Jugar</button>";
                echo "</div>";
            }
            echo "</section>";
        }
    ?>
    
    <section class="codigo">
        <form action="Ruleta-cusomizable-main/ruleta.html id="seleccionJuegoForm" method="post">
            <p>¿Tienes un código de juego?</p>
            <input type="text" placeholder="Introduce tu código" id="codigoJuego">
            <input type="submit" value="Enviar">
        </form>
    </section>

</main>

</body>
</html>
