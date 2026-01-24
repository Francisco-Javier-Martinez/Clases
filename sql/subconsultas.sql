-- Listar el nombre y la clasificación de los minijuegos cuya clasificación sea mayor a la de algún minijuego cooperativo.
SELECT nombre, clasificacion
	FROM minijuegos
		WHERE clasificacion>ANY ( -- el any sirve para comparar con varios valores en este caso pregunto si la clasificacion es mayor a alguna de las clasificaciones de los juegos cooperativos
    		SELECT clasificacion
    			FROM minijuegos
    				WHERE cooperativo=1
		);

-- Listar el nombre y la clasificación de los minijuegos cuya clasificación sea mayor a la de todos los minijuegos cooperativos.
SELECT nombre, clasificacion
	FROM minijuegos
		WHERE clasificacion>=ALL( -- el all sirve para comparar con varios valores en este caso pregunto si la clasificacion es mayor a todas las clasificaciones de los juegos cooperativos
    		SELECT clasificacion
    			FROM minijuegos
    				WHERE cooperativo=1
		);
-- Listar el nombre y la clasificación de los minijuegos cuya clasificación sea menor a la de algún minijuego cooperativo.
SELECT nombre, clasificacion
	FROM minijuegos
		WHERE clasificacion<=ALL( -- el all sirve para comparar con varios valores en este caso pregunto si la clasificacion es menor a todas las clasificaciones de los juegos cooperativos
    		SELECT clasificacion
    			FROM minijuegos
    				WHERE cooperativo=1
		);

-- Listar el nombre y el desarrollador de los minijuegos desarrollados por desarrolladores que también han desarrollado minijuegos cooperativos.
SELECT nombre, desarrollador
    FROM minijuegos
        WHERE desarrollador IN (    -- el in sirve para comparar con varios valores en este caso pregunto si el desarrollador del juego esta en la lista de desarrolladores de juegos cooperativos
            SELECT desarrollador
                FROM minijuegos
                    WHERE cooperativo = b'1'
        );

-- Listar el nombre y el desarrollador de los minijuegos desarrollados por desarrolladores que también han desarrollado minijuegos cooperativos.
SELECT nombre, desarrollador
    FROM minijuegos
        WHERE desarrollador NOT IN (-- el not in sirve para comparar con varios valores en este caso pregunto si el desarrollador del juego no esta en la lista de desarrolladores de juegos cooperativos
            SELECT desarrollador
                FROM minijuegos
                    WHERE cooperativo = b'1'
        );

-- Listar el nombre de los usuarios que han jugado a algún minijuego con clasificación 18.
SELECT nombre
    FROM usuarios
        WHERE EXISTS ( -- el exists sirve para comprobar si existe al menos un registro que cumpla la condicion
            SELECT *
                FROM partidas 
                    INNER JOIN minijuegos ON partidas.idMinijuego=minijuegos.idMinijuego
                        WHERE partidas.idUsuario=usuarios.idUsuario AND minijuegos.clasificacion=18
        );

SELECT nombre
    FROM usuarios
        WHERE NOT EXISTS ( -- el not exists sirve para comprobar si no existe ningun registro que cumpla la condicion
            SELECT *
                FROM partidas 
                    INNER JOIN minijuegos ON partidas.idMinijuego=minijuegos.idMinijuego
                        WHERE partidas.idUsuario=usuarios.idUsuario AND minijuegos.clasificacion=18
        );

-- Listar el nombre y la clasificación de los minijuegos con la segunda clasificación más alta.
SELECT nombre, clasificacion
    FROM minijuegos
        WHERE clasificacion=(
            SELECT MAX(clasificacion) -- aqui busco la clasificacion maxima
                FROM minijuegos
                    WHERE clasificacion<( --aqui busco la clasificacion maxima que sea menor a la maxima general
                        SELECT MAX(clasificacion)
                            FROM minijuegos
            )
        );
