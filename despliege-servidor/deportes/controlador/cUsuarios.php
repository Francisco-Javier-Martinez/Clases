<?php
    require_once __DIR__ .'/../modelo/mUsuarios.php';
    class Cusuarios {
        private $modeloMinijuego;
        public $vista;
        public $mensaje;
        
        //constructor 
        public function __construct() {
            $this->modeloMinijuego=new Musuarios();
            $this->vista='';
            $this->mensaje=null;
        }

        //metodo para mostrar la pantalla de inicio de sesion
        public function pantallaInicio(){
            $this->vista='inicioSesion.html';
        }
        
        //metodo para registrar un nuevo usuario
        public function registrarUsuario(){
            if($_POST['username']=='' || $_POST['nombre_completo']=='' || $_POST['password']=='' || $_POST['email']==''){
                $this->mensaje="Error: Los campos obligatorios no pueden estar vacíos.";
                $this->vista='aviso.php';
            }else{
                if (!isset($_POST['deportes']) || empty($_POST['deportes'])) {
                    $this->mensaje = "Debes seleccionar al menos un deporte.";
                    $this->vista = 'aviso.php';
                    return;
                }
                //comprobar si se han aceptado las condiciones
                if(!isset($_POST['condiciones'])){
                    $this->mensaje="Error: Debes aceptar las condiciones.";
                    $this->vista='aviso.php';
                    return;
                }
                //si el telefono esta vacio, asignar valor null
                if(empty($_POST['telefono'])){
                    $_POST['telefono']=null;
                }
                //llamar al modelo para registrar el usuario
                $this->mensaje=$this->modeloMinijuego->registrarUsuario();
                //si el registro ha sido correcto, mostrar aviso de exito
                if($this->mensaje>0){//si es mayor que 0 es que me ha devuelto el id del usuario insertado
                    //vale aqui usamos el implode para convertir el array de deportes en una cadena separada por comas ya que por necesidad 
                    //tengo que pasarlo ya que necesito que trabajen los dos controladores por separado en un proceso normal seria mas simple porque el registro
                    // de usuario y la inscripcion en deportes serian diferentes vistas pero en este caso necesito el implode y explode para pasar el array
                    $deportes = implode(',', $_POST['deportes']);
                    header('Location: index.php?controlador=Inscripcion&metodo=registrar&idUsuario='.$this->mensaje.'&deportes='.$deportes);
                    exit(); 
                }else{
                    $this->vista='aviso.php';
                }
            }
        }

    }
?>