<?php
// La carga de temas se realiza desde el controlador (MVC).
// Este archivo espera que el controlador establezca `temasRuleta` en
// `$controlador->temasRuleta` antes de renderizar la vista.
// Si se abre directamente (sin pasar por el index MVC), intentamos
// usar la variable local por compatibilidad mínima.
if (!isset($controlador)) {
    $controlador = null;
}
$temas = [];
if ($controlador !== null && isset($controlador->temasRuleta) && is_array($controlador->temasRuleta)) {
    $temas = $controlador->temasRuleta;
} else {
    // Fallback si alguien abre la vista directamente (no recomendado)
    if (isset($_GET['idJuego'])) {
        require_once __DIR__ . '/../php/models/mJuegos.php';
        $idJuego = (int)$_GET['idJuego'];
        $modelo = new Mjuegos();
        $temas = $modelo->obtenerTemasPorJuego($idJuego);
        $temas = array_slice($temas, 0, 4);
    }
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php
    // Calcular la URL base para los assets de la ruleta.
    // Si la vista se sirve desde el front controller `index.php`, `dirname($_SERVER['SCRIPT_NAME'])`
    // apuntará a la carpeta del front (por ejemplo `/preguntadaw/juego`) y necesitaremos añadir
    // la carpeta `Ruleta-cusomizable-main`. Si la vista se abre directamente, el dirname
    // ya contendrá `Ruleta-cusomizable-main`.
    $scriptDir = rtrim(dirname($_SERVER['SCRIPT_NAME']), '/\\');
    $ruletaBaseUrl = $scriptDir;
    if (basename($ruletaBaseUrl) !== 'Ruleta-cusomizable-main') {
        $ruletaBaseUrl = $ruletaBaseUrl . '/Ruleta-cusomizable-main';
    }
    ?>
    <link rel="stylesheet" href="<?php echo htmlspecialchars($ruletaBaseUrl); ?>/style.css">
    <title>Ruleta</title>
    <script>
        // Inyectar temas desde servidor para que el JS los use directamente
        //json_encode con JSON_HEX_TAG para evitar inyección de HTML
        window.ruletaTemas = <?php echo json_encode($temas, JSON_HEX_TAG); ?>;
    </script>
    <script>
        // Escritura directa en el DOM para depuración (asegura que se vea sin abrir consola)
        // Debug DOM removed for production
    </script>
</head>
<body>
    <div id="container">
        <!-- Título -->
        <h1>¡A jugar!</h1>

        <!-- Marcador -->
        <div id="marcador">
            <div id="cartelGanador">
                <p id="ganadorTexto">¡Click en "Girar" para iniciar!</p>
            </div>
        </div>

        <!-- Ruleta -->
        <div id="pointer" aria-hidden="true"></div>
        <div id="ruleta">
            <div id="sortear" role="button" tabindex="0"><div class="btnInner">GIRAR</div></div>
        </div>
    </div>

    <!-- Panel de temas eliminado (depuración) -->

    <!-- Modal -->
    <dialog>
        <div id="tituloForm">
            <p>Nombre</p>
            <p>Probabilidad (%)</p>
        </div>
        <div id="formContainer"></div>
        <button id="agregar">+</button>
        <p>Total: <span id="porcentaje"></span>%</p>
        <button id="aceptar">Cambiar</button>
        <button id="cancelar">Cancelar</button>
    </dialog>

    <script src="<?php echo htmlspecialchars($ruletaBaseUrl); ?>/js/helpers.js"></script>
    <script src="<?php echo htmlspecialchars($ruletaBaseUrl); ?>/js/index.js" defer></script>
</body>
</html>
