<?php
    require_once 'modelo/mMinijuego.php';
    require_once __DIR__ . "/../librerias/fpdf186/fpdf.php";
    class Cpdf extends FPDF{
        private $modeloMinijuego;
        public $vista;
        public $mensaje;

        public function __construct(){
            //llamar al constructor de la clase padre FPDF
            parent::__construct();
            $this->modeloMinijuego=new Mminijuego();
            $this->vista='';
            $this->mensaje=null;
            //Alias para el número de páginas
            $this->AliasNbPages();
        }

        //Cabezera del pdf
        public function Header(){
            //Arial bold 15
            $this->SetFont('Arial','B',15);
            //Mover a la derecha
            $this->Cell(80);
            //el cell el primer parametro es el ancho de la celda
            //el segundo parametro es la altura de la celda
            //el tercer parametro es el texto a mostrar
            //el cuarto parametro es el borde (0 sin borde, 1 con borde)
            //el quinto parametro es el salto de linea (0 sin salto, 1 con salto)
            //el sexto parametro es la alineación (L izquierda, C centro, R derecha)
            $this->Cell(30,10,'Minijuegos',1,0,'C');
            //Salto de línea
            $this->Ln(20);
        }

        //metodo para el pie de pagina
        public function Footer(){
            // Posición: a 1,5 cm del final
            $this->SetY(-15);
            // Arial italic 8
            $this->SetFont('Arial','I',8);
            // Número de página
            $this->Cell(0,10,'Pie de pagina '.$this->PageNo().'/{nb}',0,0,'C');
        }

        //metodo para convertir a pdf
        public function convertirPdfSoloMinijuegos(){
            //obetener los minijuegos
            $resultado=$this->modeloMinijuego->obtenerMinijuegos();
            //crear la instancia del ob pdf
            /* $pdf=new FPDF(); */ //como extiende de FPDF ya no es necesario crear una nueva instancia
            //añadir una pagina
            $this->AddPage();
            //establecer la fuente
            //En el setFont el primer parametro es la fuente
            //el segundo parametro es el estilo (B negrita, I cursiva, U subrayado) si no se quiere poner nada se deja vacio
            //el tercer parametro es el tamaño de la fuente
            $this->SetFont('Arial','',10);
            //Movemos 8 cm a la derecha
            $this->Cell(80);
            //salto de línea
            $this->Ln(10);
            //imprimir los minijuegos
            if(is_array($resultado)){
                foreach($resultado as $minijuego){
                    $this->Cell(0,10,'Nombre: '.utf8_decode($minijuego['nombre']),0,1);
                    //salto de línea entre minijuegos
                    $this->Ln(10);
                }
                //Salida del pdf al navegador
                $this->Output('I','minijuegos.pdf');
                $this->vista='index.php';
            } else {
                $this->mensaje=$resultado;
                $this->vista='error.php';
            }
        }
        //metodo para convertir a pdf
        public function convertirPdf(){
            //obetener los minijuegos
            $resultado=$this->modeloMinijuego->obtenerMinijuegos();
            //crear la instancia del ob pdf
            /* $pdf=new FPDF(); */ //como extiende de FPDF ya no es necesario crear una nueva instancia
            //añadir una pagina
            $this->AddPage();
            //establecer la fuente
            //En el setFont el primer parametro es la fuente
            //el segundo parametro es el estilo (B negrita, I cursiva, U subrayado) si no se quiere poner nada se deja vacio
            //el tercer parametro es el tamaño de la fuente
            $this->SetFont('Arial','',10);
            //Movemos 8 cm a la derecha
            $this->Cell(80);
            //salto de línea
            $this->Ln(10);
            //imprimir los minijuegos
            if(is_array($resultado)){
                foreach($resultado as $minijuego){
                    $this->Cell(0,10,'Nombre: '.utf8_decode($minijuego['nombre']),1,1);
                    $this->Cell(0,10,'Genero: '.utf8_decode($minijuego['genero']),1,1);
                    $this->Cell(0,10,'Tematica: '.utf8_decode($minijuego['tematica']),1,1);
                    $this->Cell(0,10,'Desarrollador: '.utf8_decode($minijuego['desarrollador']),1,1);
                    $this->Cell(0,10,'Clasificacion: PEGI '.utf8_decode($minijuego['clasificacion']),1,1);
                    $modo=($minijuego['cooperativo']=='1') ? 'Single Player' : 'Multiplayer';
                    $this->Cell(0,10,'Modo: '.$modo,1,1);
                    //salto de línea entre minijuegos
                    $this->Ln(10);
                }
                //Salida del pdf al navegador
                //El output tiene varios tipos de salida 
                //I -> visualiza el pdf en el navegador
                //D -> fuerza la descarga del pdf
                //F -> guarda el pdf en un fichero
                //S -> devuelve el pdf como una cadena
                $this->Output('I','minijuegos.pdf');
                $this->vista='index.php';
            } else {
                $this->mensaje=$resultado;
                $this->vista='error.php';
            }
        }
        
    }


?>