create DATABASE login;
use login;
CREATE TABLE usuario(
	idUsuario SMALLINT unsigned AUTO_INCREMENT,
    nombre varchar(150) not null,
    correo varchar(150) not null,
    contraseña char(15) not null,
	CONSTRAINT pk_Usuario PRIMARY key (idUsuario)
);
INSERT INTO usuario (nombre, correo, contraseña) VALUES
('Javier', 'javier@gmail.com', 'clave1'),
('Pablo', 'pablo@gmail.com', 'clave2'),
('Kiko', 'kiko@gmail.com', 'clave3'),
('Samu', 'samu@gmail.com', 'clave4'),
('Víctor', 'victor@gmail.com', 'clave5'),
('Isa', 'isa@gmail.com', 'clave6');
