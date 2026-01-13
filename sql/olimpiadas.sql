CREATE DATABASE if not exists olimpiadas;
USE olimpiadas;

create table Alumno(
    idAlumno smallint unsigned not null AUTO_INCREMENT,
    nombre varchar(50)  null,
    edad tinyint  null,
    genero char(1)  null,
    pais varchar(50)  null,
    constraint pk_Alu PRIMARY key (idAlumno),
    constraint chk_genero CHECK (genero in ('m','M','f','F'))
);

create table deporte(
    idDeporte tinyint unsigned not null AUTO_INCREMENT,
    nombre varchar(50) not null,
    constraint pk_Deporte PRIMARY key (idDeporte)
);

create table participantes(
    idParicipante int unsigned not null auto_increment,
    idAlumno smallint unsigned not null,
    idDeporte tinyint unsigned not null,
    fechaRegistro timeStamp not null default current_timestamp,
    constraint pk_Participante PRIMARY key (idParicipante),
    constraint fk_Alu foreign key (idAlumno) references alumno(idAlumno) on delete cascade on update cascade,
    constraint fk_Deporte foreign key (idDeporte) references deporte(idDeporte) on delete cascade on update cascade
);

insert into deporte (nombre) values
('Atletismo'),
('Natacion'),
('Gimnasia'),
('Esgrima'),
('Ciclismo');

insert into alumno (nombre, edad, genero, pais) values
('Ana Lopez', 15, 'F', 'España'),
('Juan Perez', 17, 'M', 'Mexico'),
('Luisa Gomez', 14, 'F', 'Colombia'),
('Carlos Ruiz', 16, 'M', 'Argentina'),
('Marta Sanchez', 15, 'F', 'Peru');

insert into participantes (idAlumno, idDeporte) values
(1, 1),
(1, 2),
(2, 1),
(2, 3),
(3, 4),
(4, 5),
(5, 2),
(5, 3);

SELECT alumno.nombre AS nombreAlumno, deporte.nombre AS deporte
FROM participantes
INNER JOIN alumno ON alumno.idAlumno = participantes.idAlumno
INNER JOIN deporte ON deporte.idDeporte = participantes.idDeporte ORDER by deporte.nombre;