<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>JaviGame - Inicio</title>
    <link rel="stylesheet" href="style.css">
</head>
<body id="pantalla-inicio">
    <nav>
        <h1>Transformador CSV</h1>
    </nav>
    <header>
        <h1>Alumnos Olimpiada</h1>
    </header>
    <main>
        <section>
            <h2>Participaciones</h2>
            <?php
                if (isset($mensaje)) {
                    echo "<p>$mensaje</p>";
                } else {
                    echo "<h1>Lista de Participaciones</h1>";
                    foreach ($datos as $participacion) {
                        echo $participacion['nombreAlumno'] . ": " . $participacion['deporte'] . "<br>";
                    }
                }
            ?>
            <div class="botones-csv">
                <a href="index.php?controlador=Participaciones&metodo=obtenerCSV" class="btn obtener">Obtener CSV</a>

                <hr>

                <form action="index.php?controlador=Participaciones&metodo=nuevaInscripcion" method="post" enctype="multipart/form-data">
                    <label>Seleccionar archivo CSV:</label>
                    <input type="file" name="archivo_csv">
                    <button type="submit" class="btn exportar">Subir nuevas inscripciones</button>
                </form>
            </div>
    </main>
</body>
</html>