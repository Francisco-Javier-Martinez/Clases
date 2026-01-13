<?php
    require_once __DIR__ . "/../modelo/mParticipaciones.php"; 

    class CParticipaciones {
        private $modeloParticipaciones;
        public $vista;
        public $mensaje;
        
        //constructor 
        public function __construct() {
            $this->modeloParticipaciones=new MParticipaciones();
            $this->vista='';
            $this->mensaje=null;
        }

        //metodo para monstrar inicio con las participaciones
        public function mostrarInicio(){
            $resultado=$this->modeloParticipaciones->obtenerParticipaciones();
            if(is_array($resultado)){
                //iniciar sesion para obtener el nombre del usuario
                $this->vista='pantallaInicio.php';
                return $resultado;
            } else {
                $this->mensaje=$resultado;
                $this->vista='pantallaInicio.php';
            }
        }

        //exportar CSV
        public function obtenerCSV(){
            //recogo los datos
            $datos=$this->modeloParticipaciones->obtenerParticipaciones();
            if(is_array($datos)){
                /*informacion sacada de https://www.cloudways.com/es/blog/importar-y-exportar-archivos-csv-usando-php-y-mysql/*/
                header('Content-Type: text/csv; charset=utf-8');//definimos el tipo de contenido esto es para que el navegador sepa que es un csv
                header('Content-Disposition: attachment; filename=participaciones.csv');//definimos el nombre del archivo lo primero es para que el navegador sepa que es un archivo adjunto y lo segundo es el nombre del archivo
                /*lo de 'php://output' es para que el archivo se cree en la salida estandar del navegador*/
                $output=fopen('php://output', 'w');//abrimos el fichero para escribir
                
                /*fputcsv su funcion es escribir una linea en un archivo*/
                fputcsv($output, array('Nombre Alumno', 'Deporte')); //cabecera del csv
                foreach($datos as $fila) {//recorremos los datos y los escribimos en el csv
                    fputcsv($output, $fila);
                }
                fclose($output);//cerramos el fichero
                //Si fue todo bien que carge la vista por si acabo
                $this->vista='pantallaInicio.php';
                exit;
            }else{
                $this->mensaje="Error al exportar el CSV";
                $this->vista='error.php';
            }
        }

        //meter nueva inscripción desde CSV
        public function nuevaInscripcion(){
        
        }
    }
?>