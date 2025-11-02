<?php
    require "calculadora.php";
    if(empty($_GET['num1'])){
        echo'<h1>Se envio vacio el campo numero1 vacio </h1>';
    }

    if(empty($_GET['num2'])){
        echo'<h1>Se envio vacio el campo numero1 vacio </h1>';
    }

    if(!isset($_GET['operacion'])){
        echo '<h1>'.$_GET['operacion'].'</h1>';
    }
    
    echo '<h1>'.$_GET['num1'].$_GET['operacion'].$_GET['num2'].'= </h1>';
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
            echo $resultado->dividir($_GET['num1'],$_GET['num2']);
            break;
        default:
            echo '<h1> no hay numero </h1>';
    }
?>