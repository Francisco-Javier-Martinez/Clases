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
                    $params = [
                        ':idTema' => (int)$idTema,
                        ':nPregunta' => (int)$nPregunta,
                        ':nLetra' => (string)$letra,
                        ':texto' => (string)$respuesta,
                        ':es_correcta' => (int)$esCorrecta
                    ];
                    $stmt->execute($params);
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