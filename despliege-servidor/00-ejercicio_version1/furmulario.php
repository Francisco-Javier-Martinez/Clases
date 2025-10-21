<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="recoger.php" method="get">
        <label>Num1</label>
        <input type="number" name="num1" id="num1"/>
        <label>Num2</label>
        <input type="number" name="num2" id="num2"/>
        <select id="operacion" name="operacion">
            <option value="+">Sumar</option>
            <option value="-">Restar</option>
            <option value="*">multiplicar</option>
            <option value="/">Dividir</option>
        </select>
        <input type="submit" name="enviar"/>
    </form>
</body>
</html>