-- 1. CREACIÓN DE LA BASE DE DATOS Y USO
CREATE DATABASE preguntadaw;
use preguntadaw;

-- 2. TABLA usuarios
-- Definida primero porque otras tablas (juego, tema) la referencian.
CREATE TABLE usuarios(
    idUsuario SMALLINT UNSIGNED NOT NULL auto_increment,
    nombre varchar(50) NOT NULL,
    contrasenia CHAR (15) NOT NULL, -- Se recomienda usar más de 15 caracteres para contraseñas hasheadas (por ejemplo, 60 para SHA-256)
    email varchar(150) NOT NULL,
    PRIMARY KEY(idUsuario),
    CONSTRAINT email_Usuarios UNIQUE(email)
);

-- 3. TABLA personajes
CREATE TABLE personajes(
    idPersonaje tinyint unsigned NOT NULL auto_increment,
    nombre varchar (50) NOT NULL,
    imagen blob NOT NULL, -- Corregido a BLOB para almacenar datos de imagen, o usar VARCHAR(255) para una ruta/URL
    PRIMARY KEY (idPersonaje)
);

-- 4. TABLA juego
CREATE TABLE juego(
    idJuego smallint unsigned NOT NULL auto_increment,
    descripcion varchar(250) NOT NULL,
    codigo char (7) NOT NULL,
    publico bit NOT NULL DEFAULT 0,
    idUsuario SMALLINT UNSIGNED NOT NULL,
    PRIMARY KEY (idJuego),
    CONSTRAINT FK_Juego_Usuario FOREIGN KEY(idUsuario) REFERENCES usuarios(idUsuario)
    ON DELETE CASCADE ON UPDATE CASCADE
);

-- 5. TABLA jugador
CREATE TABLE jugador(
    idJugador smallint unsigned NOT NULL auto_increment,
    nombre varchar (50) NOT NULL,
    idPersonaje tinyint unsigned NOT NULL,
    PRIMARY KEY(idJugador),
    CONSTRAINT FK_Jugador_Personajes FOREIGN KEY (idPersonaje) REFERENCES personajes (idPersonaje)
);

-- 6. TABLA ranking
CREATE TABLE ranking(
    idJugador smallint unsigned NOT NULL,
    idJuego smallint unsigned NOT NULL,
    puntuacion smallint unsigned NOT NULL,
    CONSTRAINT PK_Ranking PRIMARY KEY (idJugador, idJuego),
    CONSTRAINT FK_Ranking_Jugador FOREIGN KEY(idJugador) REFERENCES jugador(idJugador),
    CONSTRAINT FK_Ranking_Juego FOREIGN KEY(idJuego) REFERENCES juego(idJuego), -- Nombre corregido
    CONSTRAINT chk_puntuacion CHECK (puntuacion BETWEEN 250 AND 500)
);

-- 7. TABLA tema
CREATE TABLE tema(
    idTema smallint unsigned NOT NULL auto_increment,
    nombre varchar(50) NOT NULL,
    descripcion varchar(250) NOT NULL,
    publico bit NOT NULL DEFAULT 0,
    abreviatura char(10) NOT NULL,
    idUsuario smallint unsigned NULL DEFAULT NULL,
    CONSTRAINT PK_Temas PRIMARY KEY(idTema),
    CONSTRAINT FK_Tema_Usuario FOREIGN KEY (idUsuario) REFERENCES usuarios(idUsuario)
);

-- 8. TABLA temas_juegos (Relación M:N entre tema y juego)
CREATE TABLE temas_juegos(
    idTema smallint unsigned NOT NULL,
    idJuego smallint unsigned NOT NULL,
    CONSTRAINT PK_JuegosTemas PRIMARY KEY (idTema, idJuego),
    CONSTRAINT FK_TemasJuegos_Tema FOREIGN KEY(idTema) REFERENCES tema(idTema),
    CONSTRAINT FK_TemasJuegos_Juego FOREIGN KEY(idJuego) REFERENCES juego(idJuego)
);

-- 9. TABLA preguntas (PREGUNTAS)
-- **CORRECCIÓN CLAVE:** idTema ya NO es AUTO_INCREMENT. La clave primaria es compuesta (idTema, nPregunta).
-- Se agregó la clave foránea a la tabla 'tema'.
CREATE TABLE preguntas(
    idTema smallint unsigned NOT NULL,
    nPregunta tinyint unsigned NOT NULL,
    título varchar(50) NOT NULL,
    imagen varchar(20) NOT NULL,
    explicacion varchar(250) NOT NULL,
    puntuacion smallint unsigned NOT NULL DEFAULT 200, -- Corregida doble DEFAULT y hecho NOT NULL con un valor por defecto
    CONSTRAINT PK_Pregunta PRIMARY KEY(idTema, nPregunta),
    CONSTRAINT FK_Pregunta_Tema FOREIGN KEY (idTema) REFERENCES tema(idTema)
);

-- 10. TABLA respuestas (RESPUESTAS)
-- **CORRECCIÓN CLAVE:** Se añadieron columnas para el texto de la respuesta y para marcar la respuesta correcta.
CREATE TABLE respuestas (
    idTema SMALLINT UNSIGNED NOT NULL,
    nPregunta TINYINT UNSIGNED NOT NULL,
    nLetra CHAR(1) NOT NULL CHECK (nLetra IN('a','b','c','d')),
    textoRespuesta VARCHAR(250) NOT NULL, -- Añadido el texto de la respuesta
    esCorrecta BIT NOT NULL,             -- Añadido indicador de respuesta correcta
    
    CONSTRAINT PK_Respuesta PRIMARY KEY (idTema, nPregunta, nLetra),
    CONSTRAINT FK_Respuesta_Pregunta FOREIGN KEY (idTema, nPregunta) REFERENCES preguntas(idTema, nPregunta)
);