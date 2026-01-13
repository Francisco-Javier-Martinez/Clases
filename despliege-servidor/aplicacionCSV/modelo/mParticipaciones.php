<?php
    require_once __DIR__ .'/../modelo/conexion.php';
    class MParticipaciones extends Conexion{
        //metodo para obtener los participaciones
        public function obtenerParticipaciones(){
            $sql="SELECT alumno.nombre AS nombreAlumno, deporte.nombre AS deporte
                FROM participantes
                INNER JOIN alumno ON alumno.idAlumno = participantes.idAlumno
                INNER JOIN deporte ON deporte.idDeporte = participantes.idDeporte ORDER by deporte.nombre;";
            try{
                $consulta=$this->conexion->prepare($sql);
                $consulta->execute();
                $resultado=$consulta->fetchAll(PDO::FETCH_ASSOC);
                return $resultado;
            }catch(PDOException $e){
                echo "Error al obtener las participaciones: ";
            }
        }
    }
?>