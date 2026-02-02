CREATE DATABASE if not EXISTS clase ;

CREATE table grupos(
    numeroGrupo SMALLINT unsigned auto_increment,
    nombre varchar(40) not null,
    clase char(5) null,
    max_alumnos tinyint unsigned not null default 25,
    CONSTRAINT pk_grupos PRIMARY key(numeroGrupo),
    CONSTRAINT chk_max_alu CHECK (max_alumnos between 1 and 40)
);

CREATE table alumnos(
    numeroAlumno SMALLINT unsigned auto_increment,
    nombre varchar(60) not null,
    correo varchar(60) not null UNIQUE,
    CONSTRAINT pk_alu PRIMARY key (numeroAlumno)
);

CREATE table grupoAlumnos(
    numeroAlumno SMALLINT unsigned,
    numeroGrupo SMALLINT unsigned,
    CONSTRAINT pk_grupoAlu PRIMARY key (numeroAlumno,numeroGrupo),
    CONSTRAINT fk_alu FOREIGN key (numeroAlumno) REFERENCES alumnos(numeroAlumno),
    CONSTRAINT fk_grupos FOREIGN key (numeroGrupo) REFERENCES grupos(numeroGrupo)
);

--insert corrrecto
INSERT INTO grupos(`nombre`, `clase`, `max_alumnos`) VALUES (
	'grupo1','gpr1',23
);

-- fallo de check 
/* INSERT INTO grupos(`nombre`, `clase`, `max_alumnos`) VALUES (
	'grupo1','gpr1',241
); */
--#4025 - CONSTRAINT `chk_max_alu` failed for `clase`.`grupos`

create UNIQUE INDEX ind_unq_nombre on grupos(nombre);
alter table grupos DROP INDEX ind_unq_nombre;

alter TABLE grupoalumnos
	 add fecha_alta timeStamp null;

alter TABLE grupoalumnos
	 MODIFY fecha_alta timeStamp not null DEFAULT CURRENT_TIMESTAMP;

alter table grupoalumnos
	DROP FOREIGN KEY fk_grupos;