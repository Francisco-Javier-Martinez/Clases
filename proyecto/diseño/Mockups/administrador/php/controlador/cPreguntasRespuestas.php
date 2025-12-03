<?php
require_once __DIR__ . '/../modelo/mRespuesta.php';
require_once __DIR__ . '/../modelo/mPregunta.php';

class cPreguntasRespuestas{
    private $modeloRespuestas;
    private $modeloPreguntas;
    public $mensajeError;
    public $vistaCargar;

    public function __construct(){
        $this->modeloRespuestas = new mRespuesta();
        $this->modeloPreguntas = new mPregunta();
        $this->mensajeError = '';
        $this->vistaCargar = '';
    }

    // Muestra el formulario de creación
    public function mostrarCreacion(){
        $this->vistaCargar = 'creación_Preguntas.html';
        return true;
    }

    public function monstrarGestionarTema(){
        $this->vistaCargar = 'gestiontemas.html';
        return true;
    }

    // Método que llama al modelo para guardar las preguntas
    public function meterPreguntas(){
        $idTema = 1; // Temporalmente para pruebas
        $this->mensajeError = '';

        // Validaciones básicas
        if(isset($_POST['puntuacion']) && $_POST['puntuacion'] < 200){
            $this->mensajeError = "La puntuacion no puede ser menor a 200";
            $this->vistaCargar = 'creación_Preguntas.html';
            return false;
        }
        if(!isset($_POST['opcion']) || empty($_POST['opcion'])){
            $this->mensajeError = "Debe seleccionar la respuesta correcta";
            $this->vistaCargar = 'creación_Preguntas.html';
            return false;
        }
        if(empty($_POST['titulo'])){
            $this->mensajeError = "El titulo de la pregunta no puede estar vacio";
            $this->vistaCargar = 'creación_Preguntas.html';
            return false;
        }
        if(empty($_POST['explicacionPregunta'])){
            $this->mensajeError = "La explicación de la pregunta no puede estar vacia";
            $this->vistaCargar = 'creación_Preguntas.html';
            return false;
        }
        if(!isset($_FILES['imagenPregunta']) || $_FILES['imagenPregunta']['error'] != UPLOAD_ERR_OK){
            $this->mensajeError = "Debe subir una imagen para la pregunta";
            $this->vistaCargar = 'creación_Preguntas.html';
            return false;
        }

        // Insertar la pregunta
        $nPregunta = $this->modeloPreguntas->meterPreguntas($idTema);
        if(is_numeric($nPregunta) && (int)$nPregunta > 0){
            if($this->meterRespuestas($idTema, (int)$nPregunta)){
                $this->vistaCargar = 'siguientePregunta.html';
                return true;
            } else {
                // Error al insertar respuestas
                $this->vistaCargar = 'creación_Preguntas.html';
                $this->mensajeError = "No se pudieron guardar las respuestas: ";
                return false;
            }
        } else {
            // Fallo al insertar la pregunta (registro interno omitido)
            if(is_string($nPregunta)){
                $this->mensajeError = "No se pudo guardar la pregunta.";
            } else {
                $this->mensajeError = "Error al guardar la pregunta.";
            }
            $this->vistaCargar = 'creación_Preguntas.html';
            return false;
        }
    }

    // Método que llama al modelo para guardar las respuestas
    public function meterRespuestas($idTema, $nPregunta){
        if(!isset($_POST['respuestas']) || count($_POST['respuestas']) != 4){
            $this->mensajeError = "Deben ser 4 respuestas obligatoriamente";
            return false;
        }
        $letras = ['a','b','c','d'];
        $opcionCorrecta = $_POST['opcion'];
        foreach($_POST['respuestas'] as $indice => $respuesta){
            $letraC = $letras[$indice];//letra vale a en la primera vuelta, b en la segunda
            if($letraC === $opcionCorrecta){//Si la letra coincide con la opcion correcta
                $esCorrecta = 1;//significa que es la respuesta correcta
            } else {
                $esCorrecta = 0;//significa que no es la respuesta correcta
            }
            $this->modeloRespuestas->meterRespuestas($idTema, $nPregunta, $respuesta, $letraC, $esCorrecta);
        }

        return true;
    }
}

?>