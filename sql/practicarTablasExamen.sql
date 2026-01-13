create DATABASE pruebaExamen;
/*Crear tabla Usuario con los siguientes campos*/
CREATE TABLE Usuario(
	idUsuario tinyint unsigned not null AUTO_INCREMENT,
    nombre varchar (50) not null,
    correo varchar (100) not null unique,
    tipo tinyint not null,
    sino bit not null,
    dinero float (6,2) null,
    fecha timeStamp not null DEFAULT CURRENT_TIMESTAMP,
    genero varchar (150) null default "Hombre",
    CONSTRAINT pk_Usuarios PRIMARY key (idUsuario),
	CONSTRAINT chk_Tipo CHECK (tipo BETWEEN 1 and 10)
);
/*Crear un indice*/
CREATE INDEX ind_genero on usuario(genero);

CREATE TABLE objetos(
	idObjeto SMALLINT unsigned not null AUTO_INCREMENT,
    nombre varchar (50) not null,
    precio float (6,2) not null,
    descrip varchar(150) null,
	edad tinyint not null,
    CONSTRAINT pk_Objeto PRIMARY key (idObjeto),
    CONSTRAINT chk_edad CHECK( edad in (7,12,18))
);

create table compras(
	idCompras mediumint unsigned not null AUTO_INCREMENT,
    fechaCompra timestamp not null DEFAULT CURRENT_TIMESTAMP,
    idUsuario tinyint unsigned not null,
    idObjeto SMALLINT unsigned not null,
    CONSTRAINT pk_compras PRIMARY key (idCompras),
    CONSTRAINT fk_usuario FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario) on DELETE CASCADE on UPDATE CASCADE,
    CONSTRAINT fk_objeto FOREIGN KEY (idObjeto) REFERENCES objetos(idObjeto) on DELETE CASCADE on UPDATE CASCADE


);



alter TABLE usuario
	MODIFY nombre char(10) null;

ALTER TABLE objetos 
    ADD estrellas tinyint NOT NULL DEFAULT 0;

ALTER TABLE objetos
    ADD CONSTRAINT chk_estrellas CHECK (estrellas BETWEEN 0 AND 5);

DESCRIBE Usuario;

USE pruebaExamen;

ALTER TABLE Usuario 
    DROP CONSTRAINT chk_Tipo;

ALTER TABLE compras 
    DROP FOREIGN KEY fk_usuario;

-- 1. Inserción Masiva en Usuario (nombre limitado a 10 caracteres como pediste)
INSERT INTO Usuario (nombre, correo, tipo, sino, dinero, genero) VALUES
('Juan', 'juan@mail.com', 1, b'1', 10.50, 'Hombre'),
('Ana', 'ana@mail.com', 5, b'0', 99.99, 'Mujer'),
('Luis', 'luis@mail.com', 10, b'1', 50.00, 'Hombre'),
('Marta', 'marta@mail.com', 3, b'1', 120.00, 'Mujer'),
('Pedro', 'pedro@mail.com', 7, b'0', 5.25, 'Hombre');
UPDATE Usuario 
    SET nombre = 'paco' 
        WHERE tipo IN (1, 5);
-- 2. Inserción Masiva en Objetos (edad solo 7, 12 o 18)
INSERT INTO objetos (nombre, precio, descrip, edad) VALUES
('Pelota', 15.00, 'Pelota de fútbol profesional', 7),
('Consola', 299.99, 'Consola de última generación', 12),
('Libro SQL', 45.50, 'Manual avanzado de bases de datos', 18),
('Bicicleta', 150.00, 'Bicicleta de montaña', 12),
('Ajedrez', 20.00, 'Tablero de madera', 7);

-- 3. Inserción Masiva en Compras (Relacionando IDs existentes)
INSERT INTO compras (idUsuario, idObjeto) VALUES
(1, 1), -- Juan compra Pelota
(1, 3), -- Juan compra Libro SQL
(2, 2), -- Ana compra Consola
(3, 4), -- Luis compra Bicicleta
(4, 5), -- Marta compra Ajedrez
(5, 2); -- Pedro compra Consola


-- Borrar un usuario específico
DELETE FROM Usuario WHERE idUsuario = 1;

-- Borrar objetos que cuesten más de 100
DELETE FROM objetos WHERE precio > 100;

TRUNCATE TABLE compras;