<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php foreach ($datos as $juego): ?>
        <p>ID: <?= $juego['idJuego'] ?></p>
        <p>Descripción: <?= $juego['descripcion'] ?></p>
        <p>Código: <?= $juego['codigo'] ?></p>
        <p>Público: <?= $juego['publico'] ?></p>
        <p>Habilitado: <?= $juego['habilitado'] ?></p>
        <hr>
    <?php endforeach; ?>

</body>
</html>