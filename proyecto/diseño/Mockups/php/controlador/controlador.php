<?php
    require_once __DIR__ . '/../modelo/mGuardarRespuestas.php';
    class controlador{
        private $modeloRespuestas;
        public function __construct(){
            $this->modeloRespuestas=new mRespuestas();
        }
    }


?>