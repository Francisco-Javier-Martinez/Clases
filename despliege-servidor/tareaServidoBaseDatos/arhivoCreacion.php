<?php
    //Este sera un archivo cual el progromado ejecuta para la creacion de las cosas y luego se borrara o se queda en local pero nunca subir al host ya que pueden hacernos una injeccion por la multi_query
    //datos de conesion
    require_once 'configBD.php';//He decido usar require_once ya que si el fichero ha sido ya incluido evita la inclusión del mismo fichero y asi no me da errores como me estaba dando en varios sitios
    $conexion = new mysqli(SERVIDOR,USUARIO,PASSWORD,BBDD);
    mysqli_report(MYSQLI_REPORT_OFF); //apargar los errores fatales esto sera mejor cuando use try y cacht
    $sql="
    -- Crear tabla recomendaciones
	CREATE TABLE recomendaciones (
		idRecomendacion SMALLINT UNSIGNED AUTO_INCREMENT,
		nombre VARCHAR(150) NOT NULL,
		PRIMARY KEY (idRecomendacion)
	);

	-- Crear tabla animales
	CREATE TABLE animales (
		idAnimales SMALLINT UNSIGNED AUTO_INCREMENT,
		nombreAnimal VARCHAR(150) NOT NULL,
		CONSTRAINT pk_Animales PRIMARY KEY (idAnimales)
	);

	-- Crear tabla boletin_usuario
	CREATE TABLE boletin_usuario (
		idUsuario SMALLINT UNSIGNED AUTO_INCREMENT,
		nombreUsuario VARCHAR(255) NOT NULL,
		correo VARCHAR(255) NOT NULL UNIQUE,
		idioma VARCHAR(50) NOT NULL,
		idRecomendacion SMALLINT UNSIGNED NOT NULL,
		CONSTRAINT pk_boletinUsuario PRIMARY KEY (idUsuario),
		CONSTRAINT fk_idReco_Boletin FOREIGN KEY (idRecomendacion) REFERENCES recomendaciones(idRecomendacion)
	);

	-- Crear tabla boletin_animales (relación M:N entre animales y boletin_usuario)
	CREATE TABLE boletin_animales (
		idUsuario SMALLINT UNSIGNED,
		idAnimales SMALLINT UNSIGNED,
		CONSTRAINT pk_conjunta_boletinAnimal PRIMARY KEY (idUsuario, idAnimales),
		CONSTRAINT fk_usuario FOREIGN KEY (idUsuario) REFERENCES boletin_usuario(idUsuario),
		CONSTRAINT fk_animal FOREIGN KEY (idAnimales) REFERENCES animales(idAnimales)
	);

	-- Insertar recomendaciones
	INSERT INTO recomendaciones (nombre) VALUES
	('Me lo recomendó Google'),
	('Anuncio'),
	('Me lo recomendó un amigo'),
	('Otros...');

	-- Insertar un usuario
	INSERT INTO boletin_usuario (nombreUsuario, correo, idioma, idRecomendacion)
	VALUES ('Javi', 'javi@gmail.com', 'ingles', 1);

	-- Insertar animales
	INSERT INTO animales (nombreAnimal) VALUES
	('Koala'),
	('Oso Polar'),
	('Elefante Asiatico');

	-- Añadir columna opcional (permite NULL)
	ALTER TABLE boletin_usuario
	ADD COLUMN sugerencias VARCHAR(150) NULL;";
    //echo $sql;
    $conexion->multi_query($sql); //realizo una multi_query
    if($conexion->errno==1050){ //error de tabla ya existente
        echo "<h1>Tabla existente</h1>";
    }elseif($conexion){
        echo "<h1>Insercion y tabla creada correctamente</h1>";
    }else{
        echo "<h1>Error no se creo correctamente</h1>";
    }
?>