<?php
    class Cusuario{
        public $vista;
        public $mensaje;

        public function __construct(){
            $this->mensaje=null;
        } 
        
        public function monstrarRegistroUsuario(){
            $this->vista="gestion_Usuarios.html";
        }

        public function monstrarModificarUsuario(){
            $this->vista="modificar_Usuairos.html";
        }

    }
?>