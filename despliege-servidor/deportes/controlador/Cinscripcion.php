<?php
    require_once __DIR__ .'/../modelo/mInscripcion.php';
    class Cinscripcion {
        private $modeloMinijuego;
        public $vista;
        public $mensaje;
        
        //constructor 
        public function __construct() {
            $this->modeloMinijuego=new Minscripcion();
            $this->vista='';
            $this->mensaje=null;
        }

        //metodo para mostrar la pantalla de inscripcion
        public function pantallaInscri(){
            //coger los deportes disponibles
            $deportes=$this->modeloMinijuego->obtenerDeportes();
            if(is_array($deportes)){//si es un arrray es que pillo los deportes bien
                $this->vista='inscripcion.php';
                return $deportes;
            }else{
                $this->mensaje=$deportes;
                $this->vista='aviso.php';
            }
        }
        
        //metodo para registrar usuario con el registro de deportes
        public function registrar(){
            //aqui recojo el implode del cUsuarios para sacar el array de deportes seleccionados
            //entonces uso el explode para convertir la cadena en array hacemos lo contrario al implode la verda que esto me a parecido vatante curioso
            $deportesSeleccionados = explode(',', $_GET['deportes']);
            //recoger el id del usuario
            $idUsuario=$_GET['idUsuario'];
            foreach($deportesSeleccionados as $deporteId){
                //llamar al modelo para registrar la inscripcion
                $this->mensaje=$this->modeloMinijuego->registrarInscripcion($deporteId, $idUsuario);
            }
            if($this->mensaje===true){
                $this->mensaje="Inscripción realizada con exito";
                $this->vista='aviso.php';
            }else{
                $this->vista='aviso.php';
            }
        }

    }
?>