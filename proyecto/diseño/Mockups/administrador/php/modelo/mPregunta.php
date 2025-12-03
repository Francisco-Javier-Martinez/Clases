<?php
    require_once 'conexion.php';
    require_once __DIR__ . '/../../../config/configRT.php';
    class mPregunta extends Conexion{
        public $mensajeError;
        public function meterPreguntas($idTema){
            try{
                //Sacar el numero de la pregunta
                $nPregunta=$this->sacarNpregunta($idTema);
                /* if($nPregunta>10){
                    $this->mensajeError="No se pueden insertar mas de 10 preguntas por tema";
                    return $this->mensajeError;
                } */
                //Recoger datos del formulario
                $titulo=$_POST['titulo'];
                $explicacion=$_POST['explicacionPregunta'];
                //Subir imagen al servidor
                $nombreImagen=$_FILES['imagenPregunta']['name'];
                //creo una ruta temporal donde se guarda la imagen porque si no no se puede mover
                $rutaTemporal=$_FILES['imagenPregunta']['tmp_name'];
                //Guardar en la ruta preterminada de las imagenes de las preguntas que se llama img esta guardado en el configRT.php
                $rutaDestino=__DIR__ . '/../' . RUTA_IMAGENES_PREGUNTAS . $nombreImagen;
                //uso la funcion move_uploaded_file para mover la imagen a la ruta destino
                move_uploaded_file($rutaTemporal, $rutaDestino);
                $puntuacion=$_POST['puntuacion'];
                //Preparar consulta
                $sql="INSERT INTO preguntas (idTema, nPregunta, titulo, explicacion, imagen, puntuacion) 
                VALUES (:idTema, :nPregunta, :titulo, :explicacion, :imagen, :puntuacion)";
                $stmt=$this->conexion->prepare($sql);
                //Vincular parametros
                $stmt->bindParam(':idTema', $idTema);
                $stmt->bindParam(':titulo', $titulo);
                $stmt->bindParam(':explicacion', $explicacion);
                $stmt->bindParam(':imagen', $nombreImagen);
                $stmt->bindParam(':puntuacion', $puntuacion);
                $stmt->bindParam(':nPregunta', $nPregunta);
                //Ejecutar consulta
                $stmt->execute();
                if($stmt->rowCount()>0){//Si se ha insertado correctamente
                    return (int)$nPregunta; // asegurar que devolvemos un entero
                }else{
                    return $this->mensajeError="Error al insertar la pregunta";
                }
            }catch(PDOException $e){
                $this->mensajeError='Code error: ' . $e->getCode() . ' Mensaje error: ' . $e->getMessage();
                return $this->mensajeError;
            }
        }
        //metodo para sacar el numero de la siguiente pregunta
        private function sacarNpregunta($idTema){
            try{
                $sql="SELECT COUNT(*) AS nPregunta FROM preguntas WHERE idTema=:idTema"; 
                $stmt=$this->conexion->prepare($sql); //Preparar consulta
                $stmt->bindParam(':idTema', $idTema);//Vincular parametro
                $stmt->execute();//Ejecutar consulta
                $resultado=$stmt->fetch(PDO::FETCH_ASSOC);
                if($resultado){
                    return (int)$resultado['nPregunta'] + 1; //Devolver el numero de la siguiente pregunta (int)
                }else{
                    return 1; //Si no hay preguntas, devolver 1
                }
            }catch(PDOException $e){
                $this->mensajeError='Code error: ' . $e->getCode() . ' Mensaje error: ' . $e->getMessage();
                return $this->mensajeError;
            }
        }

    public function sacarNombrePregunta($idTema){
        try{
            // Devolver información completa de la pregunta para mostrar en la vista
            $sql="SELECT nPregunta, titulo, explicacion, imagen, puntuacion FROM preguntas WHERE idTema=:idTema ORDER BY nPregunta ASC"; 
            $stmt=$this->conexion->prepare($sql);
            $stmt->bindParam(':idTema', $idTema);
            $stmt->execute();
            $resultado=$stmt->fetchAll(PDO::FETCH_ASSOC);
            if($resultado){
                return $resultado;
            }else{
                return [];
            }
        }catch(PDOException $e){
            $this->mensajeError='Code error: ' . $e->getCode() . ' Mensaje error: ' . $e->getMessage();
            return $this->mensajeError;
        }
    }
    public function borrarPregunta($idTema, $nPregunta){
        try{
            $sql="DELETE FROM preguntas WHERE idTema=:idTema AND nPregunta=:nPregunta";
            $stmt=$this->conexion->prepare($sql);
            $stmt->bindParam(':idTema', $idTema);
            $stmt->bindParam(':nPregunta', $nPregunta);
            $stmt->execute();
            if($stmt->rowCount()>0){
                return true;
            }else{
                $this->mensajeError="No se encontró la pregunta para borrar";
                return false;
            }
        }catch(PDOException $e){
            $this->mensajeError='Code error: ' . $e->getCode() . ' Mensaje error: ' . $e->getMessage();
            return false;
        }
    }

    public function obtenerDatosPregunta($idTema, $nPregunta){
        try{
            $sql="SELECT * FROM preguntas WHERE idTema=:idTema AND nPregunta=:nPregunta";
            $stmt=$this->conexion->prepare($sql);
            $stmt->bindParam(':idTema', $idTema);
            $stmt->bindParam(':nPregunta', $nPregunta);
            $stmt->execute();
            $resultado=$stmt->fetch(PDO::FETCH_ASSOC);
            if($resultado){
                return $resultado;
            }else{
                return null;
            }
        }catch(PDOException $e){
            $this->mensajeError='Code error: ' . $e->getCode() . ' Mensaje error: ' . $e->getMessage();
            return null;
        }
    }
}
?>