-- usuarios con todos los permisos que sera llamado admin
CREATE USER 'Admin'@'localhost' IDENTIFIED BY 'password';
-- darle los permisos necesarios de la base de datos preguntadaw2
GRANT ALL PRIVILEGES ON preguntadaw2.* TO 'Admin'@'localhost';