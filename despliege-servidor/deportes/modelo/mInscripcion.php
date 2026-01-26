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
        //metodo para inscribir el usuario
        //metodo para registrar un nuevo usuario
        public function registrarUsuario(){
                //recoger los datos del formulario (coincidir con columnas en script.sql)
                $nombreUsuario=$_POST['username'];
                $nombreCompleto=$_POST['nombre_completo'];
                $password=$_POST['password'];
                $email=$_POST['email'];
                $telefono=$_POST['telefono'];
                $tipoUsuario='u';
            try{
                $this->conexion->beginTransaction();
                 //preparar la consulta
                $sql="INSERT INTO Usuarios (nombreUsuario, apeNombre, password, correo, telefono, perfil) 
                    VALUES (:nombreUsuario, :apeNombre, :password, :correo, :telefono, :perfil)";
            $stmt=$this->conexion->prepare($sql);
            //vincular los parametros
                $stmt->bindParam(':nombreUsuario', $nombreUsuario);
                $stmt->bindParam(':apeNombre', $nombreCompleto);
                $stmt->bindParam(':password',$password);
                $stmt->bindParam(':correo', $email);
                $stmt->bindParam(':telefono', $telefono);
                $stmt->bindParam(':perfil', $tipoUsuario);
            //ejecutar la consulta
            $stmt->execute();
            if($stmt->rowCount()>0){
                //si es correcto retorno el id del usuario insertado
                $idUsuario= $this->conexion->lastInsertId();
                //registrar las inscripciones en deportes
                foreach($_POST['deportes'] as $deporteId){
                    $this->registrarInscripcion($deporteId, $idUsuario);
                }
                $this->conexion->commit();
                return true;
                
            }else{
                return "Error al registrar el usuario.";
            }
            }catch (PDOException $e){
                if($this->conexion->inTransaction()){
                    $this->conexion->rollBack();
                }   
                if($e->getCode()==23000){//23000 es el codigo de error de clave duplicada
                        return "El nombre de usuario ya existe";
                    }else{
                        return "Error:".$e->getMessage();
                    }
            }
        }
        //metodo para registrar la inscripcion de un usuario en los deportes seleccionados
        private function registrarInscripcion($deporteId, $idUsuario){
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
        //metodo para obtener las inscripciones de un usuario
        public function obtenerInscripciones(){
            try{
                $sql="SELECT usuarios.nombreUsuario,deportes.nombreDep
                    FROM usuarios_deportes
                    INNER JOIN  deportes ON usuarios_deportes.idDeporte=deportes.idDeporte
                    INNER JOIN usuarios on usuarios_deportes.idUsuario=usuarios.idUsuario;";
                $stmt=$this->conexion->prepare($sql);
                $stmt->execute();
                $inscripciones=$stmt->fetchAll(PDO::FETCH_ASSOC);
                return $inscripciones;
            }catch (PDOException $e){
                return "Error : ".$e->getMessage();
            }
        }

        //metodo para ver el total de deportes inscritos
        public function totalDeportesInscritos(){
            try{
                $sql="SELECT COUNT(DISTINCT idDeporte) as TotalDeporte
                        FROM Usuarios_deportes;";
                $stmt=$this->conexion->prepare($sql);
                $stmt->execute();
                $total=$stmt->fetch(PDO::FETCH_ASSOC);
                return $total;;
                }catch (PDOException $e){
                    return "Error : ".$e->getMessage();
            }
        }
        //metodo para ver el total de deportes inscritos por usuario
        public function totalDeportesUsuarios(){
            try{
                $sql="SELECT deportes.nombreDep,COUNT(usuarios_deportes.idDeporte) as Total_Gente_Inscrita
	        FROM deportes 
    	inner join usuarios_deportes on deportes.idDeporte=usuarios_deportes.idDeporte
        GROUP BY deportes.idDeporte;";
                $stmt=$this->conexion->prepare($sql);
                $stmt->execute();
                $totalUsuarios=$stmt->fetchAll(PDO::FETCH_ASSOC);
                return $totalUsuarios;
                }catch (PDOException $e){
                    return "Error : ".$e->getMessage();
                }
        }
    }
?>