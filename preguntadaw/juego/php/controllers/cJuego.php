<?php
require_once __DIR__ . '/../models/mJuegos.php';

class CJuego{
    private $modeloJuegos;
    public $mensaje;
    public $vista;
    public $juegos = [];

    public function __construct(){
        $this->modeloJuegos = new Mjuegos();
        $this->mensaje = '';
        $this->vista = '';
    }
    
    public function iniciarJuego(){
        // Cargar juegos públicos
        $this->juegos = $this->modeloJuegos->obtenerJuegosPublicos();
        if(empty($this->juegos)) {
            $this->mensaje = "No hay juegos públicos disponibles.";
            $this->juegos = [];
        }
        $this->vista = 'seleccionJuego.php';
        return $this->juegos;
    }
    
}

?>
