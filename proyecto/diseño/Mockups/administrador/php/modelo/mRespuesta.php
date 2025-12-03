<?php
//PDO
    require_once 'conexion.php';
    class mRespuesta extends Conexion{
        public function meterRespuestas($idTema,$nPregunta,$respuesta,$letra, $esCorrecta){            
                try{
                    // Preparar consulta usando los nombres de columna reales (script.sql usa 'texto')
                    $sql = "INSERT INTO respuestas (idTema, nPregunta, nLetra, texto, es_correcta) 
                            VALUES (:idTema, :nPregunta, :nLetra, :texto, :es_correcta)";
                    $stmt = $this->conexion->prepare($sql);
                    //Vincular parametros
                    $stmt->bindParam(':idTema', $idTema);
                    $stmt->bindParam(':nPregunta', $nPregunta);
                    $stmt->bindParam(':nLetra', $letra);
                    $stmt->bindParam(':texto', $respuesta);
                    $stmt->bindParam(':es_correcta', $esCorrecta);
                    //Ejecutar consulta
                    
                    $stmt->execute();
                    if($stmt->rowCount() > 0){
                        return true;
                    }else{
                        $this->mensajeError="Error al insertar la respuesta";
                        return $this->mensajeError;
                    }
                }catch(PDOException $e){
                        $this->mensajeError='Code error: ' . $e->getCode() . ' Mensaje error: ' . $e->getMessage();
                        return $this->mensajeError;
                }   
        }  
    } 

?>