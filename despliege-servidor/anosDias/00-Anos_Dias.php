<?php
    function operacionDias($anio,&$arrayDias){
        if($anio % 4 == 0 && ($anio % 100 != 0 || $anio % 400 == 0)){
            echo '<p>El año: '.$anio.' es bisiesto y tiene 29 dias</p>';
            array_pop($arrayDias);
            array_pop($arrayDias);
        }else{
            echo '<p>El año: '.$anio.' no es bisiesto y tiene 28 dias</p>';
            array_pop($arrayDias);
            array_pop($arrayDias);
            array_pop($arrayDias);
        }
    }
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Años Dias</title>
</head>
<body>
    <h1>¿ES BISIESTO ESE AÑO?</h1>
    <form action="" metho="get">
        <input type="number" name="anio"/>
        <input type="submit" value="Enviar"/>
    </form>
    <?php
        $arrayDias= array(1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31);
        if(isset($_GET['anio']) && $_GET['anio']<0 ){
            echo "<p>Error: Pon un año válido</p>";
        }elseif(isset($_GET['anio']) && $_GET['anio'] !==''){
            operacionDias($_GET['anio'],$arrayDias);
            print_r($arrayDias);
        }
    ?>
</body>
</html>