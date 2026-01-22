-- usuarios con todos los permisos que sera llamado admin
CREATE USER 'Admin'@'localhost' IDENTIFIED BY 'password';
-- darle los permisos necesarios de la base de datos preguntadaw2
GRANT ALL PRIVILEGES ON preguntadaw2.* TO 'Admin'@'localhost';
FLUSH PRIVILEGES; -- esto es para que los cambios tengan efecto inmediato

-- usuario con permisos limitados para solo leer y escribir en la base de datos preguntadaw2
CREATE USER 'User_Lec_Escri'@'localhost' IDENTIFIED BY 'password';
-- darle permisos de solo lectura y escritura en la base de datos preguntadaw2
GRANT SELECT, INSERT, UPDATE, DELETE ON preguntadaw2.* TO 'User_Lec_Escri'@'localhost';
FLUSH PRIVILEGES; -- esto es para que los cambios tengan efecto inmediato

-- usuario con permisos limitados para solo leer
CREATE USER 'User_Lectura'@'localhost' IDENTIFIED BY 'password';
-- darle permisos de solo lectura en la base de datos preguntadaw2
GRANT SELECT ON preguntadaw2.* TO 'User_Lectura'@'localhost';
FLUSH PRIVILEGES; -- esto es para que los cambios tengan efecto inmediato

-- usuario con permisos limitados para solo escribir y leer pero no borrar
CREATE USER 'UserNoBorrar'@'localhost' IDENTIFIED BY 'password';
-- darle permisos de lectura y escritura pero no borrar en la base de datos preguntadaw2
GRANT SELECT, INSERT, UPDATE ON preguntadaw2.* TO 'UserNoBorrar'@'localhost';
FLUSH PRIVILEGES; -- esto es para que los cambios tengan efecto inmediato

-- usuario sin permisos para pruebas
CREATE USER 'UserSinPermisos'@'localhost' IDENTIFIED BY 'password';
-- no darle ningun permiso en la base de datos preguntadaw2
FLUSH PRIVILEGES; -- esto es para que los cambios tengan efecto inmediato