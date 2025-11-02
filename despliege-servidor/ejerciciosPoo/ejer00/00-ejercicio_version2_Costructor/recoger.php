<?php
    require "calculadora.php";

    if(!isset($_GET['num1'])) {
        echo '<h1>Se envió vacío el campo numero 1</h1>';
    } else {
        $num1 = $_GET['num1'];
    }

    if(!isset($_GET['num2'])) {
        echo '<h1>Se envió vacío el campo numero 2</h1>';
    } else {
        $num2 = $_GET['num2'];
    }

    if(!isset($_GET['operacion'])) {
        echo '<h1>No has seleccionado operador</h1>';
    }

    if(isset($num1) && isset($num2) && isset($_GET['operacion'])) {
        // Creamos una variable de objeto Calculadora y paso los valores del formulario
        $resultado = new Calculadora($num1, $num2);
        // Operaciones
        switch($_GET["operacion"]){
            case '+': 
                echo $resultado->sumar();
                break;
            case '-':
                echo $resultado->restar();
                break;
            case '*':
                echo $resultado->multiplicar();
                break;
            case '/':
                if($num1 == 0 || $num2 == 0){
                    echo '<h1>No se puede dividir por 0</h1>';
                } else {
                    echo $resultado->dividir();
                }
                break;
            default:
                echo '<h1>Operación no válida</h1>';
        }
    } else {
        echo '<h1>Al no meter número no se realizó la operación</h1>';
    }
?>