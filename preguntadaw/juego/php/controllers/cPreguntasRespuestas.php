<?php
require_once __DIR__ . '/../models/mRespuesta.php';
require_once __DIR__ . '/../models/mPregunta.php';

class cPreguntasRespuestas{
    private $modeloRespuestas;
    private $modeloPreguntas;
    public $mensaje;
    public $vista;

    public function __construct(){
        $this->modeloRespuestas = new Mrespuesta();
        $this->modeloPreguntas = new Mpregunta();
        $this->mensaje = '';
        $this->vista = '';
    }
    
}

?>