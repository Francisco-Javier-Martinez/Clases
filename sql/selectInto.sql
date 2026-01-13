/*En SQL Server: SELECT INTO crea tablas.

En MySQL: SELECT INTO busca una variable (como @mi_variable). Al no encontrar una variable, el sistema lanza el error #1327.*/
/*Se sustituyó por CREATE TABLE + INSERT INTO ... SELECT ... */
CREATE TABLE UsuariosPremium 
    SELECT nombre, correo, dinero
        FROM Usuario
            WHERE dinero > 50;