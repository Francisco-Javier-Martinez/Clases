CREATE DATABASE if not EXISTS Pokedex;
Use Pokedex;
CREATE TABLE pokemon (
    id_pokemon INT PRIMARY KEY,
    nombre VARCHAR(50),
    tipo VARCHAR(30),
    generacion INT,
    id_evoluciona_de INT,
    FOREIGN KEY (id_evoluciona_de) REFERENCES pokemon(id_pokemon)
);

INSERT INTO pokemon VALUES
(1, 'Bulbasaur', 'Planta', 1, NULL),
(2, 'Ivysaur', 'Planta', 1, 1),
(3, 'Venusaur', 'Planta', 1, 2),

(4, 'Charmander', 'Fuego', 1, NULL),
(5, 'Charmeleon', 'Fuego', 1, 4),
(6, 'Charizard', 'Fuego', 1, 5),

(7, 'Squirtle', 'Agua', 1, NULL),
(8, 'Wartortle', 'Agua', 1, 7),
(9, 'Blastoise', 'Agua', 1, 8),

(25, 'Pikachu', 'Eléctrico', 1, NULL),
(26, 'Raichu', 'Eléctrico', 1, 25);



--- Consulta para obtener el nombre del Pokémon junto con el nombre del Pokémon del que evoluciona
SELECT pokemon.nombre AS pokemon, pokemon2.nombre AS evoluciona_de
		FROM pokemon
			LEFT JOIN pokemon pokemon2 ON pokemon.id_evoluciona_de=pokemon2.id_pokemon;

SELECT pokemon.nombre
    FROM pokemon 
        LEFT JOIN pokemon pokemon2 ON pokemon.id_pokemon=pokemon2.id_evoluciona_de-- si un pokemon no tiene ningun otro pokemon que evolucione de el, el join dara NULL
            WHERE pokemon2.id_pokemon IS NULL;-- Pokémon que no evolucionan a ningún otro Pokémon

SELECT pokemon.nombre, pokemon2.nombre, pokemon.tipo
    FROM pokemon
        INNER JOIN pokemon pokemon2 ON pokemon.tipo=pokemon2.tipo AND pokemon.id_pokemon<pokemon2.id_pokemon;

SELECT pokemon.nombre, pokemon2.nombre, pokemon.generacion
    FROM pokemon
        INNER JOIN pokemon pokemon2 ON pokemon.generacion=pokemon2.generacion  AND pokemon.tipo <> pokemon2.tipo AND pokemon.id_pokemon<pokemon2.id_pokemon;

SELECT pokemon.nombre
    FROM pokemon
        INNER JOIN pokemon pokemon2 ON pokemon.id_pokemon=pokemon2.id_evoluciona_de
            WHERE pokemon.id_evoluciona_de IS NOT NULL; 


SELECT DISTINCT pokemon.nombre
    FROM pokemon 
        INNER JOIN pokemon pokemon2 ON pokemon.id_pokemon=pokemon2.id_evoluciona_de
                WHERE pokemon.id_evoluciona_de IS NULL;

SELECT pokemon.nombre AS pokemon, pokemon.tipo AS tipo_actual, pokemon2.nombre AS anterior, pokemon2.tipo AS tipo_anterior
    FROM pokemon 
        INNER JOIN pokemon pokemon2 ON pokemon.id_evoluciona_de=pokemon2.id_pokemon
            WHERE pokemon.tipo <> pokemon2.tipo;