<?php
    require_once __DIR__ .'/../modelo/conexion.php';
    class Minscripcion extends Conexion{
        
        //sacar los deportes disponibles
        public function obtenerDeportes(){
            try{
                $sql="SELECT * FROM deportes";
                $stmt=$this->conexion->prepare($sql);
                $stmt->execute();
                $deportes=$stmt->fetchAll(PDO::FETCH_ASSOC);
                return $deportes;
            }catch (PDOException $e){
                return "Error : ".$e->getMessage();
            }
        }
        //metodo para registrar la inscripcion de un usuario en los deportes seleccionados
        public function registrarInscripcion($deporteId, $idUsuario){
                try{
                    $sql="INSERT INTO Usuarios_deportes (idDeporte, idUsuario) VALUES (:idDeporte, :idUsuario)";
                    $stmt=$this->conexion->prepare($sql);
                    //vincular los parametros
                    $stmt->bindParam(':idUsuario', $idUsuario);
                    $stmt->bindParam(':idDeporte', $deporteId);
                    //ejecutar la consulta
                    $stmt->execute();
                    if($stmt->rowCount()>0){
                        //si es correcto retorno true
                        return true;
                    }
                }catch (PDOException $e){
                    if($e->getCode()==23000){//23000 es el codigo de error de clave duplicada
                    return "El nombre de usuario ya existe";
                }else{
                    return "Error:".$e->getMessage();
                }
                }
        }
    }
?>