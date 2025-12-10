<?php
    require_once __DIR__ .'/../models/conexion.php';
    
    class Mjuegos extends Conexion{
        // En tu esquema, el 'Título' de la interfaz parece ser la 'descripcion' de la tabla 'juego'.
        // Los 'Tema 1', 'Tema 2', etc., son los 'nombre' de la tabla 'tema'.
        public function obtenerJuegosPublicos(){
            // Consulta SQL que selecciona la descripción del juego, su ID y los nombres de sus temas.
            // Se asume que solo quieres juegos que tengan TEMAS y que estén marcados como PÚBLICOS.
            $sql = "
                SELECT
                    j.idJuego,
                    j.descripcion AS titulo,
                    j.publico,
                    GROUP_CONCAT(t.nombre ORDER BY t.nombre SEPARATOR '|') AS temas_nombres
                FROM
                    juego j
                JOIN
                    temas_juegos tj ON j.idJuego = tj.idJuego
                JOIN
                    tema t ON tj.idTema = t.idTema
                WHERE
                    j.publico = 1
                GROUP BY
                    j.idJuego, j.descripcion, j.publico
                ORDER BY
                    j.idJuego;
            ";

            try {
                $stmt = $this->conexion->prepare($sql);
                $stmt->execute();
                // Devuelve todos los juegos públicos con sus temas concatenados.
                return $stmt->fetchAll(PDO::FETCH_ASSOC);
            } catch (PDOException $e) {
                // Manejo de errores
                error_log("Error al obtener juegos públicos: " . $e->getMessage());
                return []; // Retorna un array vacío en caso de error
            }
        }
        public function buscarJuegoPorCodigo($codigo){
            $sql = "
                SELECT
                    idJuego,
                    descripcion AS titulo,
                    codigo,
                    publico
                FROM
                    juego
                WHERE
                    codigo = :codigo;
            ";
            try {
                $stmt = $this->conexion->prepare($sql);
                // Usamos bindParam para prevenir inyecciones SQL
                $stmt->bindParam(':codigo', $codigo, PDO::PARAM_STR); 
                $stmt->execute();
                
                // Devuelve la primera fila como array asociativo o false si no la encuentra
                return $stmt->fetch(PDO::FETCH_ASSOC);
            } catch (PDOException $e) {
                error_log("Error al buscar juego por código: " . $e->getMessage());
                return false; 
            }
        }
        /**
         * Obtener los temas asociados a un juego.
         * Devuelve un array de temas con campos idTema y nombre.
         */
        public function obtenerTemasPorJuego($idJuego){
            $sql = "
                SELECT t.idTema, t.nombre
                FROM tema t
                JOIN temas_juegos tj ON t.idTema = tj.idTema
                WHERE tj.idJuego = :idJuego
                ORDER BY t.nombre
            ";
            try{
                $stmt = $this->conexion->prepare($sql);
                $stmt->bindValue(':idJuego', (int)$idJuego, PDO::PARAM_INT);
                $stmt->execute();
                return $stmt->fetchAll(PDO::FETCH_ASSOC);
            } catch (PDOException $e){
                error_log("Error al obtener temas por juego: " . $e->getMessage());
                return [];
            }
        }
    }
?>