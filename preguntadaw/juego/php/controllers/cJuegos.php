<?php
require_once __DIR__ . '/../models/mJuegos.php';

class CJuegos{
    private $modeloJuegos;
    public $mensaje;
    public $vista;
    public $juegos = [];
    public $codigoStatus; // 'existente'|'no-existe'|'invalid-length'|null
    public $codigoMessage;

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
    
    public function validarYBuscarJuegoPorCodigo(){
        // Leer el código desde la petición (form POST/GET)
        $codigo = isset($_REQUEST['codigoJuego']) ? trim($_REQUEST['codigoJuego']) : '';

        // Inicializar estado
        $this->codigoStatus = null;
        $this->codigoMessage = '';

        // Cargar lista de juegos públicos para mostrar por defecto
        $this->juegos = $this->modeloJuegos->obtenerJuegosPublicos();

        if ($codigo === '' || strlen($codigo) !== 7) {
            $this->codigoStatus = 'invalid-length';
            $this->codigoMessage = 'Ha de ser máximo 7';
            $this->vista = 'seleccionJuego.php';
            return null;
        }

        // Búsqueda en la BD
        $juego = $this->modeloJuegos->buscarJuegoPorCodigo($codigo);

        if ($juego) {
            // El juego existe: marcar estado y dejar que la vista lo muestre
            $this->codigoStatus = 'existente';
            $this->codigoMessage = 'Código existente';
            $this->vista = 'seleccionJuego.php';
            return null;
        } else {
            $this->codigoStatus = 'no-existe';
            $this->codigoMessage = 'Código de juego no existente';
            $this->vista = 'seleccionJuego.php';
            return null;
        }
    }
}

?>