<?php
    require_once __DIR__ . '/../modelo/mRespuesta.php'; 
    require_once __DIR__ . '/../modelo/mPregunta.php';
    
    class cPreguntasRespuestas{
        private $modeloRespuestas;
        private $modeloPreguntas;
        public $mensajeError;
        public $vistaCargar;
        
        public function __construct(){
            $this->modeloRespuestas=new mRespuesta();
            $this->modeloPreguntas=new mPregunta();
        }

        //Muestra el formulario de creación
        public function mostrarCreacion(){
            $this->vistaCargar = 'creación_Preguntas.html';
            return true;
        }

        //Metodo que llama al modelo para guardar las preguntas
        public function meterPreguntas(){
            /* $idTema=$_POST['temas']; */
            $idTema=2; //Temporalmente para pruebas
            
            // Validación de campo puntuacion
            if(isset($_POST['puntuacion']) && $_POST['puntuacion'] < 200){
                $this->mensajeError="La puntuacion no puede ser menor a 200";
                $this->vistaCargar = 'creación_Preguntas.html';
                return false;
            }
            // Validar que se haya seleccionado una respuesta correcta
            if(!isset($_POST['opcion']) || empty($_POST['opcion'])){
                $this->mensajeError="Debe seleccionar la respuesta correcta";
                $this->vistaCargar = 'creación_Preguntas.html';
                return false;
            }
            if(empty($_POST['titulo'])){
                $this->mensajeError="El titulo de la pregunta no puede estar vacio";
                $this->vistaCargar = 'creación_Preguntas.html';
                return false;
            }
            if(empty($_POST['explicacionPregunta'])){
                $this->mensajeError="La explicación de la pregunta no puede estar vacia";
                $this->vistaCargar = 'creación_Preguntas.html';
                return false;
            }
            if(!isset($_FILES['imagenPregunta']) || $_FILES['imagenPregunta']['error'] != UPLOAD_ERR_OK){
                $this->mensajeError="Debe subir una imagen para la pregunta";
                $this->vistaCargar = 'creación_Preguntas.html';
                return false;
            }
            
            //llamar al modelo para guardar la pregunta
            $nPregunta=$this->modeloPreguntas->meterPreguntas($idTema);
            
            if(!is_string($nPregunta) && $nPregunta > 0){
                
                //si es correcto ahora debo llamar al metodo para guardar las respuestas
                if($this->meterRespuestas($idTema,$nPregunta)){
                    $this->vistaCargar = 'siguientePregunta.html'; // Vista de éxito
                    return true;
                }else{
                    // 🚨 CORRECCIÓN FINAL: Si meterRespuestas falló, el mensaje de error 
                    // ya fue asignado dentro de ese método. Simplemente cargamos la vista de error.
                    $this->vistaCargar = 'creación_Preguntas.html';
                    return false;
                }
                
            }else{
                // Capturar el mensaje de error si el modelo de preguntas lo devolvió como string
                if(is_string($nPregunta)){ 
                    $this->mensajeError = $nPregunta;
                } else {
                    $this->mensajeError="Error al guardar la pregunta"; 
                }
                $this->vistaCargar = 'creación_Preguntas.html';
                return false;
            }
        }
        
        //Metodo que llama al modelo para guardar las respuestas
        public function meterRespuestas($idTema,$nPregunta){
            
            //compruebo que sean 4 respuestas si o si
            if(!isset($_POST['respuestas']) || count($_POST['respuestas']) != 4){
                $this->mensajeError="Deben ser 4 respuestas obligatoriamente";
                return false;
            }
            
            $letras=['a','b','c','d'];
            $opcionCorrecta = $_POST['opcion'];
            
            //llamar al modelo para guardar las respuestas
            foreach($_POST['respuestas'] as $indice => $respuesta){
                
                $letraC=$letras[$indice];
                
                // Validación de campo vacío 
                if (trim($respuesta) == '') {
                    $this->mensajeError = "La respuesta " . strtoupper($letraC) . " no puede estar vacía.";
                    return false;
                }
                
                // Determina si es correcta comparando la letra del array con la letra seleccionada.
                if($letraC == $opcionCorrecta){
                    $esCorrecta=1;
                }else{
                    $esCorrecta=0;
                }
                
                // Llamar al modelo e intentar la inserción
                $resultado=$this->modeloRespuestas->meterRespuestas($idTema,$nPregunta,$respuesta,$letraC,$esCorrecta);
                
                // Si el modelo NO devuelve TRUE, significa que hubo un error de DB
                if($resultado!==true){
                    // Asigna el error detallado de PDO para que la vista lo muestre
                    $this->mensajeError=$resultado; 
                    return false; // Detener el bucle y la función
                }
            }
            
            return true; // Éxito
        }
    }
?>