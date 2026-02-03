--"¿Quién es el jefe de quién?": Muestra el nombre del 
-- empleado y el nombre de su jefe directo.
SELECT empleados.nombre as empleado, jefe.nombre as Jefe
	FROM empleados inner JOIN empleados as jefe on empleados.id_jefe=jefe.id_emp;

--"La élite de Tecnología" Muestra el nombre y salario de los empleados que ganan más que el salario promedio del departamento de 'Tecnología' (ID 2).
SELECT nombre,salario from empleados 
WHERE salario>(SELECT AVG(salario) from empleados WHERE id_dep=2);
-- "Empleados en Barcelona": Muestra los nombres de los empleados que trabajan en departamentos ubicados en 'Barcelona'.
SELECT nombre from empleados where id_dep IN (SELECT id_dep FROM departamentos where ciudad='Barcelona');

-- "Proyectos sin asignaciones": Muestra los nombres y puestos de los empleados que no están asignados a ningún proyecto.
SELECT nombre,puesto from empleados where id_emp not IN ( SELECT id_emp from Asignaciones );

-- "Salarios por encima del promedio departamental": Muestra el nombre, salario e ID de departamento de los empleados cuyo salario es mayor que el salario promedio de su respectivo departamento.
SELECT nombre, salario, id_dep FROM empleados as emp1 WHERE emp1.salario> (SELECT AVG(emp2.salario) from empleados as emp2 where emp1.id_dep=emp2.id_dep);

-- "Jefes que son empleados": Muestra los nombres de los empleados que también son jefes de otros empleados.
SELECT nombre from empleados WHERE id_emp in ( SELECT id_jefe FROM empleados WHERE id_jefe is not null);

--  "Proyectos sin asignaciones": Muestra los nombres de los proyectos que no tienen ningún empleado asignado.
SELECT nombre_proy from proyectos where id_proy not in (SELECT id_proy FROM asignaciones);

-- "Empleados en departamentos de ciudades que comienzan con 'B'": Muestra los nombres de los empleados que trabajan en departamentos ubicados en ciudades cuyo nombre comienza con la letra 'B'.
SELECT nombre from empleados WHERE id_dep in (SELECT id_dep from departamentos where ciudad like 'B%');

-- "Departamentos sin empleados": Muestra los nombres de los departamentos que no tienen empleados asignados.
SELECT nombre_dep from departamentos where id_dep not in ( SELECT id_dep from empleados);

-- "Jefes sin empleados a cargo": Muestra los nombres de los jefes que no tienen empleados asignados a ellos.
SELECT nombre as jefe from empleados WHERE id_emp not in (SELECT id_jefe FROM empleados WHERE id_jefe is not null);

-- "Departamentos con empleados": Muestra los nombres de los departamentos que tienen al menos un empleado asignado.
SELECT nombre_dep from departamentos WHERE EXISTS(SELECT nombre_dep from empleados where departamentos.id_dep=empleados.id_dep);

-- "Empleados con salario superior al de todos en Tecnología": Muestra el nombre, salario y puesto de los empleados cuyo salario es mayor que el salario de todos los empleados en el departamento de 'Tecnología' (ID 2).
SELECT nombre,salario,puesto FROM empleados WHERE salario>all( SELECT salario FROM empleados WHERE id_dep=2);

-- "Empleado con el salario más alto": Muestra el nombre y salario del empleado con el salario más alto en la empresa.
SELECT nombre, salario FROM Empleados WHERE salario >= ALL ( SELECT salario FROM Empleados );
-- "Departamentos con más de 2 empleados": Muestra los IDs de los departamentos que tienen más de 2 empleados asignados.
SELECT id_dep, COUNT(*) AS total_empleados
FROM Empleados
GROUP BY id_dep
HAVING COUNT(*) > 2;

-- "Proyectos con asignaciones superiores a 25 horas semanales": Muestra los IDs de los proyectos junto con el promedio de horas semanales asignadas, pero solo para aquellos proyectos donde el promedio de horas semanales es mayor a 25.
SELECT id_proy, avg(horas_semanales) as pormedio_hora from asignaciones GROUP by id_proy HAVING AVG(horas_semanales)>25

-- "Evoluciones de Pokémon": Muestra el nombre del Pokémon y el nombre de su pre-evolución (si existe).
SELECT pok2.nombre , pokemon.nombre FROM pokemon inner join pokemon as pok2 on pokemon.id_evoluciona_de=pok2.id_pokemon LIMIT 5;


-- 1. Crear Tablas

CREATE TABLE Departamentos (
    id_dep INT PRIMARY KEY,
    nombre_dep VARCHAR(50),
    ciudad VARCHAR(50)
);

CREATE TABLE Empleados (
    id_emp INT PRIMARY KEY,
    nombre VARCHAR(50),
    puesto VARCHAR(50),
    salario DECIMAL(10, 2),
    fecha_ingreso DATE,
    id_jefe INT, -- Clave foránea reflexiva (apunta a la misma tabla)
    id_dep INT   -- Clave foránea a Departamentos
);

CREATE TABLE Proyectos (
    id_proy INT PRIMARY KEY,
    nombre_proy VARCHAR(50),
    presupuesto DECIMAL(12, 2)
);

CREATE TABLE Asignaciones (
    id_emp INT,
    id_proy INT,
    horas_semanales INT,
    PRIMARY KEY (id_emp, id_proy)
);

-- 2. Insertar Datos

-- Departamentos
INSERT INTO Departamentos VALUES 
(1, 'Recursos Humanos', 'Madrid'),
(2, 'Tecnología', 'Barcelona'),
(3, 'Ventas', 'Valencia');

-- Empleados (Nota: id_jefe NULL significa que es el director general)
INSERT INTO Empleados VALUES 
(100, 'Carlos M.', 'Director General', 90000, '2015-01-01', NULL, 1),
(101, 'Ana G.', 'Gerente Tecnología', 75000, '2016-03-15', 100, 2),
(102, 'Luis P.', 'Gerente Ventas', 72000, '2017-06-01', 100, 3),
(103, 'Sofia R.', 'Desarrollador Senior', 50000, '2018-02-20', 101, 2),
(104, 'Miguel T.', 'Desarrollador Junior', 30000, '2021-08-10', 103, 2), -- Su jefe es Sofia (103)
(105, 'Elena B.', 'Ejecutivo Ventas', 40000, '2019-11-05', 102, 3),
(106, 'David F.', 'Becario', 15000, '2023-01-10', 104, 2); -- Su jefe es Miguel (104)

-- Proyectos
INSERT INTO Proyectos VALUES 
(10, 'Migración Cloud', 50000),
(20, 'Nueva Web', 20000),
(30, 'Campaña Verano', 15000);

-- Asignaciones (Quién trabaja en qué)
INSERT INTO Asignaciones VALUES 
(103, 10, 20), -- Sofia en Migración
(103, 20, 10), -- Sofia en Web
(104, 20, 30), -- Miguel en Web
(106, 20, 40), -- David en Web
(105, 30, 25); -- Elena en Campaña