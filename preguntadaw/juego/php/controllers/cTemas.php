<?php
    require_once __DIR__ ."/../models/modeloTemas.php";
    require_once __DIR__ ."/../models/mPregunta.php";
    class CTemas{
        private $modelo;
        private $modeloPreguntas;
        public $mensaje;
        public $vista;


        public function __construct(){
            $this->modelo=new ModeloTemas();
            $this->mensaje=null;
            $this->modeloPreguntas = new Mpregunta();
        }

        function listarTemas(){
            session_start();
            $idUsuario = $_SESSION['idUsuario'];
            $this->vista="gestiontemas.php";
            $resultado=$this->modelo->listarTemas($idUsuario);
            if(empty($resultado)){
                return []; /*RETORNAMOS ARRAY VACÍO*/
            }else{
                return $resultado;
            }
        }

        function obtenerTema(){
            $this->vista="modificacion_Tema.php";
            if(isset($_GET['idTema'])){
                $idTema=$_GET['idTema'];
                $resultado=$this->modelo->obtenerTema($idTema);
                $pregunta = $this->modeloPreguntas->sacarNombrePregunta($idTema);
                $datos=[
            // nombre de todas las cosas que necesita la vista
                'pregunta' => $pregunta,
                'resultado' => $resultado
                ];
                if($resultado){
                    return $datos;
                }
            }else{
                return $this->mensaje="Error";
            }
            
        }
    }
?>