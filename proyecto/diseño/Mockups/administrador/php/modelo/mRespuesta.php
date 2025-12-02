<?php
require_once 'conexion.php';

class mRespuesta extends Conexion{
    public $mensajeError; // Añadida propiedad para evitar errores de acceso

    public function meterRespuestas($idTema, $nPregunta, $respuesta, $letra, $esCorrecta){            
        try{
            // Consulta SQL ajustada a tu tabla
            $sql="INSERT INTO respuestas (idTema, nPregunta, nLetra, texto, es_correcta) 
                  VALUES (:idTema, :nPregunta, :letra, :texto, :esCorrecta)";
            
            $stmt=$this->conexion->prepare($sql);
            
            // Vincular parámetros con tipos explícitos
            $stmt->bindParam(':idTema', $idTema, PDO::PARAM_INT);
            $stmt->bindParam(':nPregunta', $nPregunta, PDO::PARAM_INT);
            $stmt->bindParam(':letra', $letra, PDO::PARAM_STR); // Vinculado a :letra (nLetra en BD)
            $stmt->bindParam(':texto', $respuesta, PDO::PARAM_STR); // Vinculado a :texto (texto en BD)
            $stmt->bindParam(':esCorrecta', $esCorrecta, PDO::PARAM_INT); // Vinculado a :esCorrecta (es_correcta en BD)
            
            $stmt->execute();
            
            if($stmt->rowCount() > 0){
                return true;
            }else{
                $this->mensajeError = "Error al insertar la respuesta.";
                return $this->mensajeError;
            }
        }catch(PDOException $e){
            $this->mensajeError = 'Code error: ' . $e->getCode() . ' Mensaje error: ' . $e->getMessage();
            return $this->mensajeError;
        }   
    }   
} 
?>