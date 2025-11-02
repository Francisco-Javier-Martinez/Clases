<?php
	require_once "objeto.php";
	require_once "conoce.php";
	require_once "compras.php";
	$compras= new Compras();
	$conoce= new Conoce();
	$Objeto = new objeto();
	$listaObjetoComprados=$compras->sacarNumeroDeCompras();
	$listaObjetos= $Objeto->recogerObjetos();
	$listaConoce= $conoce->recogerConoce();
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <title>Examen</title>
</head>
<body>
    <header>
        <h1>TITULO</h1>
    </header>
    <nav>
        <ul>
            <li><a href="prueba.html">Hola1</a></li>
            <li><a href="prueba.html">Hola2</a></li>
            <li><a href="prueba.html">Hola3</a></li>
            <li><a href="prueba.html">Hola4</a></li>
        </ul>
    </nav>
    <main>
		<?php
			if($listaObjetoComprados!=null){
				echo '<h1>Total de compras</h1>';
				while($fila=$listaObjetoComprados->fetch_assoc()){
					echo '<p>Objeto: '.$fila["nombreObjeto"].' Numero de veces comprado: '.$fila["vecesComprado"].' Informacion: '.$fila["informacion"].'</p>';
				}
			}
			
		?>
        <section class="formulario-registro">
            <h2>Registro de Nuevo Usuario</h2>
            <form action="recibir.php" method="POST"> 
                <div class="form-group">
                    <label for="nombreUsuario">Nombre de Usuario:</label>
                    <input type="text" id="nombreUsuario" name="nombreUsuario">
                </div>
                
                <div class="form-group">
                    <label for="correo">Correo Electrónico:</label>
                    <input type="email" id="correo" name="correo">
                </div>
                
                <div class="form-group">
                    <label for="contrasena">Contraseña:</label>
                    <input type="password" id="contrasena" name="contrasena" minlength="8" maxlength="13"> 
                </div>
                <div class="form-group">
                    <label for="obt">Selecciona un Objeto:</label>
					<?php
						if($listaObjetos==null){
							echo "<h1>No hay obj disponible</h1>";
						}else{
							echo '<select id="obt" name="obt">';
							while($file=$listaObjetos->fetch_assoc()){
								echo  '<option value="'.$file["idObjeto"].'">'.$file["nombre"].'</option>';
							}
							echo '</select>';
						}
					
					?>
                </div>
				<div>
					<?php
						if($listaConoce==null){
						}else{
							while($fila=$listaConoce->fetch_assoc()){
							echo '<label>';
							echo '<input type="checkbox" name="conoce[]" value="'
							.$fila["idConoce"].'">'.$fila["nombre"].'</label>';
							}
						}
					?>
					<input type="checkbox">
				</div>
				<div>
					<input type="text" name="obs">
				</div>
                <button type="submit">Registrarse</button>
            </form>
        </section>
        </main>
</body>
</html>