<?php

class Calculadora {
    //Atributos
    private $num1;
    private $num2;

    //Constructor
    public function __construct($num1,$num2) { 
        $this->num1 = $num1;
        $this->num2 = $num2;
    }

    public function sumar() {
        return $this->num1 + $this->num2;
    }

    public function restar() {
        /*Uso un true o false para saber si num2 es mayor a num1 depende hara una operacion u otra*/
        if ($this->comprobar()) {
            return $this->num1 - $this->num2;
        } else {
            return $this->num2 - $this->num1;
        }
    }

    public function multiplicar() {
        return $this->num1 * $this->num2;
    }

    public function dividir() {
        if ($this->comprobar()) {
            return $this->num1 / $this->num2;
        } else {
            return $this->num2 / $this->num1;
        }
    }

    /* Metodo para comprobar los numeros si el num1 es mayor a num2 */
    private function comprobar() {
        if ($this->num1 > $this->num2) {
            $compro = true;
            return $compro;
        } else {
            $compro = false;
            return $compro;
        }
    }
}

?>