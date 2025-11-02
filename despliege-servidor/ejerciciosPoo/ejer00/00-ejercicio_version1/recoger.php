<?php
    require "calculadora.php";
    if(!isset($_GET['num1'])) {
        echo '<h1>Se envió vacío el campo numero 1</h1>';
    }

    if(!isset($_GET['num2'])) {
        echo '<h1>Se envió vacío el campo numero 2</h1>';
    }

    if(!isset($_GET['operacion'])) {
        echo '<h1>No has seleccionado operador</h1>';
    }

    if(isset($_GET['num1']) && isset($_GET['num1'])!='' && isset($_GET['num2']) && isset($_GET['num2'])!='' && isset($_GET['operacion'])) {
        $resultado = new Calculadora();
        switch($_GET["operacion"]){
            case '+': 
                echo $resultado->sumar($_GET['num1'],$_GET['num2']);
                break;
            case '-':
                echo $resultado->restar($_GET['num1'],$_GET['num2']);
                break;
            case '*':
                echo $resultado->multiplicar($_GET['num1'],$_GET['num2']);
                break;
            case '/':
                if($_GET['num2']==0 || $_GET['num1']==0){
                    echo '<h1> No se puede dividir por 0 </h1>';
                }else{
                    echo $resultado->dividir($_GET['num1'],$_GET['num2']);
                }
                break;
            default:
                echo '<h1> no hay numero </h1>';
        }
    }else{
        echo'<h1>Al no meter numero no se realizado la operacion </h1>';
    }

?>
