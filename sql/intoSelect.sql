CREATE TABLE usuarioCorreo (
    idUsuarioCorreo INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nombre CHAR(10),
    correo VARCHAR(100) NOT NULL,
    PRIMARY KEY (idUsuarioCorreo)
);

INSERT INTO usuarioCorreo (nombre, correo)
	SELECT nombre, correo 	
		FROM Usuario 
			WHERE genero = 'Mujer';

