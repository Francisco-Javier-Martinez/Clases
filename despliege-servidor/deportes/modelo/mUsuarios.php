<?php
    require_once __DIR__ .'/../modelo/conexion.php';
    class Musuarios extends Conexion{
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
                return $this->conexion->lastInsertId();
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