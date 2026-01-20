-- primera prueba en la tarea 11.01 de inyección SQL
-- Inyección SQL en login de usuario
' OR 1=1 
--  En usuario y contraseña vacía:

SELECT * from usuario where correo='' OR 1=1 -- ' && contraseña='';


