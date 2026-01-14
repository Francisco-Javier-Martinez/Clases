CREATE DATABASE if not EXISTS Prueba2;
use Prueba2;
CREATE table tema(
	idtema SMALLINT not null,
    nombreT varchar (150) not null,
    descrip varchar (150) not null,
    publico bit not null,
    abreviatura char (5) null,
    CONSTRAINT pk_tema PRIMARY KEY (idTema)
); 

CREATE table preguntas(
	idtema SMALLINT not null,
    nPregunta SMALLINT unsigned not null,
    titulo varchar(100) not null,
    imagen blob null,
    explicacion varchar(150) not null,
    puntuacion tinyint unsigned not null,
    CONSTRAINT pk_preguntas PRIMARY KEY (idtema,nPregunta),
    CONSTRAINT fk_tema FOREIGN KEY (idtema) REFERENCES tema(idtema),
    CONSTRAINT chk_puntuacion CHECK (puntuacion>100 && puntuacion<150)
);

CREATE TABLE respuestas(
	idtema SMALLINT not null, 
    nLetra char(1) not null,
	nPregunta SMALLINT unsigned not null,
	titulo varchar(100) not null,
    correcto bit not null DEFAULT 0,
    CONSTRAINT pk_respuesta PRIMARY KEY (idtema,nLetra),
    CONSTRAINT fk_temaNpregunta FOREIGN KEY (idtema,nPregunta) REFERENCES preguntas (idtema,nPregunta) on DELETE CASCADE on UPDATE CASCADE,
    CONSTRAINT chk_nLetra CHECK (nLetra in ("a","b","c","d"))
);

alter table preguntas
	drop FOREIGN key fk_tema

alter table preguntas
	add CONSTRAINT fk_tema FOREIGN KEY (idtema) REFERENCES tema(idtema) on DELETE CASCADE on UPDATE CASCADE;


alter table tema
	MODIFY abreviatura char (10) not null

CREATE INDEX ind_titulo on preguntas(titulo)

CREATE UNIQUE INDEX idc_unique_titulo on preguntas(titulo)

alter TABLE preguntas
	DROP INDEX ind_titulo;

    alter table preguntas
rename to preguntas2

ALTER TABLE tema
	add fechaCreacion timestamp DEFAULT CURRENT_TIMESTAMP

    SET FOREIGN_KEY_CHECKS = 0;

    ALTER TABLE preguntas
	add CONSTRAINT CHECK (puntuacion>150 && puntuacion<200)

    ALTER TABLE respuestas
DROP CONSTRAINT chk_nLetra