<?php
    require_once 'conectar.php';

    class Usuario extends Conectar{
        public function comprobarUsuario(){
            try{
                $correo=$_POST['correo'];
                $contrasena=$_POST['contrasena'];

                $sql="SELECT * from usuario where correo='".$correo."' && contraseña='".$contrasena."';";
                $usuarioBuscado=$this->conexion->query($sql);
                if($usuarioBuscado->num_rows>0){
                    return $usuarioBuscado;
                }else{
                    return false;
                }
            }catch(mysqli_sql_exception $e){
                echo '<h1>Error:'.$e->getCode().'</h1>'; 
                echo '<h1>Error:'.$e->getMessage().'</h1>';
            }
        }
    }



?>