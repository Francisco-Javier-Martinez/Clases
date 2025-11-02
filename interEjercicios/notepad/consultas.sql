CREATE TABLE usuarios(
	idUsuario SMALLINT unsigned AUTO_INCREMENT ,
    nombre varchar (150) not null,
    correo varchar(180) not null UNIQUE,
    contrasena char(13) not null,
    CONSTRAINT pk_usuarios PRIMARY KEY (idUsuario)
);
Create table Objetos(
	idObjeto SMALLINT unsigned AUTO_INCREMENT,
    nombre varchar (150) not null,
    precio decimal (6,2) not null,
	informacion varchar (200) not null,
    CONSTRAINT pk_objeto PRIMARY KEY (idObjeto)

);
INSERT INTO usuarios (nombre, correo, contrasena) VALUES
('Ana García', 'ana.garcia@email.com', 'a1b2c3d4e5f6g'),
('Luis Pérez', 'luis.perez@email.com', 'h7i8j9k0l1m2n'),
('Marta López', 'marta.lopez@email.com', 'p3q4r5s6t7u8v'),
('Javier Ruiz', 'javier.ruiz@email.com', 'w9x0y1z2a3b4c'),
('Elena Martín', 'elena.martin@email.com', 'd5e6f7g8h9i0j');
INSERT INTO Objetos (nombre, precio, informacion) VALUES
('Teclado Mecánico', 75.99, 'Teclado con switches Cherry MX Blue para una respuesta táctil y sonora.'),
('Ratón Inalámbrico', 25.50, 'Ratón ergonómico con sensor óptico de alta precisión y batería recargable.'),
('Monitor Curvo 27"', 249.95, 'Pantalla LED curva de 27 pulgadas, resolución Full HD y 144Hz de tasa de refresco.'),
('Webcam HD', 35.00, 'Cámara web con resolución 1080p, enfoque automático y micrófono incorporado.'),
('Disco Duro SSD 1TB', 89.40, 'Unidad de estado sólido (SSD) de 1TB para un rendimiento de carga ultrarrápido.'),
('Mochila para Portátil', 45.75, 'Mochila resistente al agua con compartimentos acolchados para dispositivos de 15 pulgadas.');
CREATE table compras(
	idCompra int unsigned AUTO_INCREMENT,
    idObjeto SMALLINT unsigned,
    idUsuario SMALLINT unsigned,
    fecha timestamp default CURRENT_TIMESTAMP,
    CONSTRAINT fk_obj FOREIGN KEY (idObjeto) REFERENCES objetos (idObjeto),
    CONSTRAINT fk_usu FOREIGN KEY (idUsuario) REFERENCES usuarios (idUsuario),
    CONSTRAINT pk_compras PRIMARY key (idCompra)
);
INSERT INTO compras (idObjeto, idUsuario, fecha) VALUES
(3, 1, '2025-09-20 10:30:00'),
(1, 1, '2025-09-25 14:45:00'),
(5, 2, '2025-10-01 09:00:00'),
(3, 3, '2025-10-15 11:20:00');


SELECT usuarios.idUsuario,usuarios.nombre,idCompra
	from compras inner join usuarios
    	on compras.idUsuario=usuarios.idUsuario;
		
SELECT idCompra,usuarios.idUsuario,usuarios.nombre as "nombreUsuario",objetos.idObjeto,objetos.nombre as "nombreObjeto",objetos.precio
	from compras inner join usuarios
    	on compras.idUsuario=usuarios.idUsuario
        	INNER JOIN objetos
            	on compras.idObjeto=objetos.idObjeto  
ORDER BY `objetos`.`precio` DESC

update usuarios
	set nombre = "waza"
    	WHERE idUsuario=1;

DELETE FROM usuarios WHERE idUsuario=1

CREATE TABLE conoce (
	idConoce SMALLINT unsigned AUTO_INCREMENT,
    nombre varchar(150) not null,
    PRIMARY key (idConoce)
);
INSERT INTO conoce (nombre) VALUES
('Instagram'),
('Amigo/Recomendación'),
('Noticias / Periódico'),
('Correo Electrónico (Gmail, Outlook)'),
('Búsqueda en Google (SEO)');

CREATE TABLE conoce_Usuario(
	idConoce_Usuairo SMALLINT unsigned AUTO_INCREMENT,
    idUsuario SMALLINT unsigned,
	PRIMARY key (idConoce_Usuairo),
    FOREIGN KEY (idUsuario) REFERENCES usuarios(idUsuario)
);CREATE TABLE conoce (
	idConoce SMALLINT unsigned AUTO_INCREMENT,
    nombre varchar(150) not null,
    PRIMARY key (idConoce)
);
INSERT INTO conoce (nombre) VALUES
('Instagram'),
('Amigo/Recomendación'),
('Noticias / Periódico'),
('Correo Electrónico (Gmail, Outlook)'),
('Búsqueda en Google (SEO)');

CREATE TABLE conoce_Usuario(
	idConoce_Usuairo SMALLINT unsigned AUTO_INCREMENT,
    idUsuario SMALLINT unsigned,
	PRIMARY key (idConoce_Usuairo),
    FOREIGN KEY (idUsuario) REFERENCES usuarios(idUsuario)
);
-- 1. Añadir la columna idConoce con el mismo tipo de dato que en la tabla 'conoce'
ALTER TABLE conoce_Usuario
ADD COLUMN idConoce SMALLINT UNSIGNED NOT NULL AFTER idUsuario;

-- 2. Añadir la Clave Foránea que la vincula con la tabla 'conoce'
ALTER TABLE conoce_Usuario
ADD CONSTRAINT fk_conoce_usuario_conoce
    FOREIGN KEY (idConoce)
    REFERENCES conoce(idConoce)
    ON DELETE RESTRICT 
    ON UPDATE CASCADE;

-- 3. OPCIONAL: Añadir una restricción UNIQUE para evitar duplicados
-- Esto asegura que un usuario solo pueda registrar una vez que conoció por un medio específico.
ALTER TABLE conoce_Usuario
ADD UNIQUE KEY uk_usuario_conoce (idUsuario, idConoce);

ALTER TABLE usuarios
	add observacion varchar(150) null ;

SELECT conoce.nombre as "nombreConoce",COUNT(conoce_usuario.idConoce) FROM conoce_usuario
    	inner join conoce on conoce.idConoce=conoce_usuario.idConoce
        GROUP by conoce.nombre,conoce_usuario.idConoce;