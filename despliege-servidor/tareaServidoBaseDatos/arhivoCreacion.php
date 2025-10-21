<?php
    //datos de conesion
    require 'configBD.php';
    $conexion = new mysqli(SERVIDOR,USUARIO,PASSWORD,BBDD);
    mysqli_report(MYSQLI_REPORT_OFF); //apargar los errores fatales esto sera mejor cuando use try y cacht
    $sql="
    CREATE TABLE recomendaciones(
	idRecomendacion tinyint AUTO_INCREMENT,
    nombre varchar(150) not null,
    PRIMARY KEY(idRecomendacion)
    );
    INSERT INTO recomendaciones (nombre) VALUES ('Me lo recomendó Google'),
    ('Anuncio'),
    ('Me lo recomendó un amigo'),
    ('Otros...');";
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