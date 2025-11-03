<?php
 require_once 'configBD.php';
 try{
	$conexion= new mysqli(SERVIDOR,USUARIO,PASSWORD,"");
	$sql="CREATE DATABASE kikoLands ;
use kikoLands;

CREATE TABLE cacharos(
	idCacharo SMALLINT unsigned AUTO_INCREMENT,
    nombre varchar(150) not null,
    precio decimal (4,2) not null,
    descripcion varchar (200) null,
    CONSTRAINT pk_Cacharos PRIMARY key (idCacharo)
);
insert into cacharos (nombre,precio) VALUES ('wazaaa',5.5),
('kikoGusano',5.99);
create TABLE movida(
		idMovida SMALLINT unsigned AUTO_INCREMENT,
    	idCacharo SMALLINT unsigned,
    	nombre varchar(150) not null,
    	tipo char(1) not null,
    	CONSTRAINT chec_tipo_movida CHECK (tipo in ('a','b','c')),
    	CONSTRAINT pk_idMovida PRIMARY KEY(idMovida),
		CONSTRAINT fk_Cacharo FOREIGN KEY (idCacharo) REFERENCES 				cacharos(idCacharo)
);";
	$correcto=$conexion->multi_query($sql);
	if ($correcto) {
        echo "<h1>Base de datos kikoLands creada correctamente.</h1>";
    }
 }catch(mysqli_sql_exception $e){
    //echo "<p>Código: " . $e->getCode() . "</p>";
    //echo "<p>Mensaje: " . $e->getMessage() . "</p>";
	if($e->getCode()==1007){
		echo '<h1>Tabla ya creada</h1>';
	}
 }
 

?>