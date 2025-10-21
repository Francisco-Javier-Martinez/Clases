<?php

class Calculadora {
    public function sumar($num1, $num2){
        return $num1+$num2;
    }
    public function restar($num1, $num2){
        /*Uso un true o false para saber si num2 es mayor a num1 depende hara una operacion u otra*/
        if($this->comprobar($num1,$num2)){
            return $num1-$num2;
        }else{
            return $num2-$num1;
        }
    }
    public function multiplicar($num1,$num2){
        return $num1*$num2;
    }
    public function dividir($num1,$num2){
        if($this->comprobar($num1,$num2)){
            return $num1/$num2;
        }else{
            return $num2/$num1;
        }
    }
    /* Metodo para comprobar los numeros si el num1 es mayor a num2 */
    private function comprobar($num1,$num2){
        if($num1>$num2){
            $compro=true;
            return $compro;
        }else{
            $compro=false;
            return $compro;
        }
    }
}

?>