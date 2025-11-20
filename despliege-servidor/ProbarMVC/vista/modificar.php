<?php
    require_once __DIR__ . '/../modelo/Mrecomendaciones.php';//He decido usar require_once ya que si el fichero ha sido ya incluido evita la inclusión del mismo fichero y asi no me da errores como me estaba dando en varios sitios
    require_once __DIR__ . '/../modelo/Manimales.php';
    require_once __DIR__ . '/../modelo/Mboletin_Usuario.php';

    $recomendar = new Recomendaciones(); //instancio el objeto de Recomendaciones
    $animal = new Animales(); //instanciar el objeto de animales
    $usuario= new Boletin_Usuario();

    $arrayRecomendados = $recomendar->recogerRecomendaciones(); //llamo a recogerRecomendaciones

    $arrayAnimales = $animal->recogerAnimales(); //llamo a animales

    //Recoger el id del usuario a modificar
    $usu=$_GET['idUsuario'];
    $arraiUsuario=$usuario->monstrarTodasCaracteristacasUsuario($usu);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css"/>
    <title>Configuracion</title>
</head>
<body>
    <!--Cabecera -->
    <header>
        <h1 id="titulo">MODIFICACION</h1>
    </header>
    <nav>
        <!--Menu -->
        <ul>
            <li><a href="#inicio" class="amenu">Inicio</a></li>
            <li><a href="index.php"  class="amenu">Formulario</a></li>
            <li><a href="monstrarModificarBorrar.php" class="amenu">MODIFICAR/BORRAR</a></li>
            <li><a href="sacarInner.php" class="amenu">Ver usuario/animales</a></li>
        </ul>
    </nav>
    <main>
        <!--formulario-->
        <div id="formu">
        <section id="formulario">
            <h1  id="formuIndice" >Modificaion de Noticias de Animales</h1>
            <form action="modificarFinal.php" method="post">
                <!-- campo oculto para pasar el id del usuario -->
                <input type="hidden" name="idUsuario" value="<?php echo $usu; ?>"/>
                <!-- Text -->
                <label class="texlabel">Nombre:
                    <?php
                        $filaUsuario=$arraiUsuario->fetch_assoc();
                        echo '<input type="text" name="nombre" value="'.$filaUsuario['nombreUsuario'].'" readonly/>';
                    ?>
                </label>

                <label class="texlabel" >Correo:  
                    <?php
                        echo '<input type="text" name="correoElectronico" value="'.$filaUsuario['correo'].'"/>';
                    ?>
                </label>
                <!-- Sugurencias-->
                <label>Sugerencia
                    <?php
                        echo '<input type="text" name="sugerencia" value="'.$filaUsuario['sugerencias'].'" readonly/>';
                    ?>
                </label>
                <!--Radio-->
                <p>Idioma seleccionado:</p>
                <label>
                    <input type="radio" name="idioma" value="espanol" /> Español
                </label>
                <label>
                    <input type="radio" name="idioma" value="ingles"/> Inglés
                </label>
                <!--Checkbox-->
                <!--Debe salir por defecto los animales que tiene seleccionado el usuario-->
                <p>Información a recibir:</p>
                <?php
                    //Si es diferente a null es que tenemos filas si no muestro mensaje
                    if($arrayAnimales!=null){
                        while($fila=$arrayAnimales->fetch_assoc()){ 
                            echo '<label>
                                    <input type="checkbox" name="animales[]" value='.$fila['idAnimales'].'>'.$fila['nombreAnimal'].'</label>';
                            }
                    }else{
                        echo '<p>No tenemos animales para recibir informacion de ellos</p>';
                    }

                ?>
                <!--Select-->
                <p>¿Cómo nos has conocido?:</p>
                <?php
                    //Si es diferente a null es que tenemos filas si no muestro mensaje
                    if($arrayRecomendados!=null){
                        echo '<select id="comoConocio" name="comoConocio">';
                        while($fila=$arrayRecomendados->fetch_assoc()){ 
                            echo '<option value="'.$fila['idRecomendacion'].'">'.$fila['nombre'].'</option>';
                        }
                        echo '</select>';
                    }else{
                        echo '<p>No tenemos recomendados disponibles</p>';
                    }
                ?>
                
                <!--Envicar y Resetear-->
                <p>¿Has terminado de rellenar?</p>
                <input class="botonesFormulario" type="reset" value="Resetar"/>
                <input class="botonesFormulario" type="submit" value="Enviar"/>
            </form>
            <img class="imagenesAnimales" src="img/losTres.png" alt="Los 3"/>
        </section>
        </div>
    </main>
    <footer class="piePagina">
        <h2>2º DAW</h2>
        <p>Fco. Javier Martínez Fernández</p>
        <p>Informacion sobre aniamles: <a href="https://www.20minutos.es/lainformacion/archivo/14-animales-peligro-extincion-por-cambio-climatico-koala-elefante-5328628/" target="_blank">Click aqui</a></p>
        <p>Informacion sobre ayudar por el cambio climatico <a href="https://www.fundacionaquae.org/wiki/diez-consejos-luchar-cambio-climatico/" target="_blank">Click aqui</a></p>
    </footer>
</body>
</html>