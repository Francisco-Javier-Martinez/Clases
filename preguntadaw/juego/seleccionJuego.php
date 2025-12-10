<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Juegos Disponibles</title>
    <link rel="stylesheet" href="css/seleccionJuego.css">
</head>

<?php
    // Preparar atributos data en body para que el JS los lea sin inyectar scripts
    $bodyAttrs = '';
    if (isset($controlador->codigoStatus) && $controlador->codigoStatus !== null) {
        $bodyAttrs .= ' data-codigo-status="' . htmlspecialchars($controlador->codigoStatus) . '"';
        if (isset($controlador->codigoSearched)) {
            $bodyAttrs .= ' data-codigo-searched="' . htmlspecialchars($controlador->codigoSearched) . '"';
        }
    }
?>
<body id="elegirJuego" <?php echo $bodyAttrs; ?>>

<header>
    <h1>BIENVENIDO, +nombreJugador</h1>
</header>

<main>
    
    <section class="codigo">
        <form action="index.php?controller=Juegos&action=validarYBuscarJuegoPorCodigo" id="seleccionJuegoForm" method="post">
            <h2>¿Tienes un código de juego?</h2>
            <input type="text" name="codigoJuego" placeholder="Introduce tu código" id="codigoJuego">
            <input type="submit" value="Enviar">
            <p id="mensajeCodigo" class="mensaje-error-inline" style="display:none; text-align:center; margin-top:8px;"></p>
        </form>
    </section>
    <?php
        // Si hay mensaje de error (por ejemplo: código no encontrado), NO mostramos los juegos
        if(!isset($mensajeError) || $mensajeError === ''){
            if(!empty($controlador->juegos)){
                echo "<h2>JUEGOS DISPONIBLES</h2>";
                echo "<section class='grid-juegos'>";
                foreach($controlador->juegos as $juego){
                    $temas = explode('|', $juego['temas_nombres']);
                    $idJ = isset($juego['idJuego']) ? (int)$juego['idJuego'] : 0;
                    $codigoAttr = isset($juego['codigo']) ? htmlspecialchars($juego['codigo']) : '';
                    echo "<div class='tarjeta' data-idjuego='" . $idJ . "' data-codigo='" . $codigoAttr . "'>";
                    echo "  <div class='tarjeta-header'>";
                    echo "    <h3>" . $juego['titulo'] . "</h3>";
                    echo "    <span class='estado'>Público</span>";
                    echo "  </div>";
                    echo "  <div class='temas'>";
                    foreach($temas as $tema){
                        echo "<button>" . $tema . "</button>";
                    }
                    echo "  </div>";
                    // Usar enlace MVC hacia el index para que el controlador cargue la ruleta
                    echo "  <a class='jugar' href='index.php?controller=Juegos&action=mostrarRuleta&idJuego=" . $idJ . "'>Jugar</a>";
                    echo "</div>";
                }
                echo "</section>";
            }
        }
    ?>


</main>

<?php
    // Mostrar solo mensaje inline sobre el código (no inyectamos lógica JS aquí)
    if (isset($controlador->codigoStatus) && $controlador->codigoStatus !== null) {
        $jsMsg = json_encode($controlador->codigoMessage);
        $jsStatus = json_encode($controlador->codigoStatus);
        echo "<script>window.addEventListener('DOMContentLoaded', function(){ var el = document.getElementById('mensajeCodigo'); if(el){ el.style.display='block'; el.textContent = " . $jsMsg . "; if(" . $jsStatus . " === 'existente'){ el.style.color = '#2b8f2b'; } else { el.style.color = '#ff5555'; } } });</script>";
    }
?>

<script type="module" src="./js/app.js"></script>

<!-- Depuración eliminada: ahora la ruleta usa el flujo MVC del servidor -->
</body>
</html>
