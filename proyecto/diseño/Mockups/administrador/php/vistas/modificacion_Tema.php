<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modificar Tema</title>
    <link rel="stylesheet" href="css/usuario.css">
</head>
<body>
    <header>
        <img id="logo" src="img/preguntadawLogo.png" alt="Logo preguntadaw">
        <h1>Tema</h1>
    </header>
    <nav>
        <ul>
            <li><a href="panelAdministrador.html">Panel</a></li>
            <li><a href="creacion_Juegos.html">Crear juego</a></li>
            <li><a href="gestion_Usuarios.html">Gestionar Usuarios</a></li>
            <li><a href="gestiontemas.html">Temas</a></li>
            <li><a href="gestion_Avatares.html">Avatares</a></li>
            <li><a href="inicio_sesion_admin.html">Cerrar sesion</a></li>
        </ul>
    </nav>
    <main>
        <div class="container">
            <h2>Biblioteca de Temas</h2>
            <p class="subtitle">Crea y gestiona tus temas personalizados con sus preguntas</p>
        </div>
        <div class="container">
            <h3>Editar Tema</h3>
            <form action="Modificar_Preguntas.php" method="post">
                <div class="form-box">
                    <label>Nombre del Tema</label>
                    <input type="text" value="Nombre del tema seleccionado">
                </div>
                <div class="form-box">
                    <label>Descripcion del Tema</label>
                    <input type="text" value="Descripcion">
                </div>
                <div class="form-box">
                    <label>Tema Publico</label>
                    <span class="subtitle">Permite que otros usuarios usar tu tema</span>
                    <input type="checkbox" name="juegoPublico" id="checkbox-publico"/>
                </div>
                <div class="buttons-box">
                    <button type="submit" class="save-btn">✓ Modificar Pregutas/Respuestas</button>
                </div>
            </form>
        </div>
        <!-- Sección de preguntas: reutiliza estilos .container, .temas-box y .tema-item -->
        <div class="container">
            <h3>Preguntas</h3>
            <p class="subtitle">Lista de preguntas del tema (vista previa)</p>
            <?php
                // Incluir el controlador y obtener las preguntas para mostrar sus títulos
                require_once __DIR__ . '/../controlador/cPreguntasRespuestas.php';
                $controller = new cPreguntasRespuestas();
                $idTema = 1; // ID del tema para el cual se quieren obtener las preguntas
                $preguntas = $controller->sacarNombrePregunta($idTema);
                if(!empty($preguntas)){
                    echo '<div class="temas-box">';
                    foreach($preguntas as $index => $pregunta){
                        $titulo = $pregunta['titulo'];
                        if(isset($pregunta['nPregunta'])){
                            $nPregunta = (int)$pregunta['nPregunta'];
                        } else {
                            $nPregunta = $index + 1;
                        }
                        echo '<div class="tema-item">';
                        echo '<a class="tema-link" href="Modificar_Preguntas.php?idTema=' . $idTema . '&nPregunta=' . $nPregunta . '">' . $titulo . '</a>';
                        echo '<form method="post" action="borrarPregunta.php" style="display:inline-block;margin-left:8px;">';
                        echo '<input type="hidden" name="idTema" value="' . $idTema . '">';
                        echo '<input type="hidden" name="nPregunta" value="' . $nPregunta . '">';
                        echo '<button type="submit" class="delete-btn">🗑️</button>';
                        echo '</form>';
                        echo '</div>';
                    }
                    echo '</div>';
                } else {
                    echo '<p>No hay preguntas en este tema.</p>';
                }
            ?>
            </div>
            <div style="margin-top:16px;">
                <a href="creación_Preguntas.html"><button class="save-btn" type="button">+ Crear pregunta</button></a>
            </div>
        </div>
    </main>
    <footer>
        <p>Derechos reservados a la - @Escuela Virgen de Guadalupe</p>
    </footer>
</body>
</html>