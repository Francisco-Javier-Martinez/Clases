<?php
require_once __DIR__ . '/../models/mJuegos.php';

class cJuegos{
    private $modeloJuegos;
    public $mensaje;
    public $vista;

    public function __construct(){
        $this->modeloJuegos = new Mjuegos();
        $this->mensaje = '';
    }
    
}
// El resto del código PHP y HTML
?>