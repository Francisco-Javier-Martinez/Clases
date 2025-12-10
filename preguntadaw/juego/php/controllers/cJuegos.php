<?php
require_once __DIR__ . '/../models/mJuegos.php';

class cJuegos{
    private $modeloJuegos;
    public $mensaje;
    public $vista;
    public $juegos = [];

    public function __construct(){
        $this->modeloJuegos = new Mjuegos();
        $this->mensaje = '';
        $this->vista = '';
    }
    
    public function cargarJuegosPublicos(){
        $this->juegos = $this->modeloJuegos->obtenerJuegosPublicos();
        if(empty($this->juegos)) {
            $this->mensaje = "No hay juegos públicos disponibles.";
        } else {
            $this->vista = 'seleccionJuego.php';
        }
        return $this->juegos;
    }
    
}

?>