<?php
// Verificar si el nombre de la canción fue enviado
if (isset($_POST['song_name'])) {
    $songName = $_POST['song_name'];

    // Ruta donde se guardará el archivo
    $file = 'songs.txt';

    // Abrir el archivo en modo de adición
    $fileHandle = fopen($file, 'a');
    if ($fileHandle) {
        // Escribir el nombre de la canción en una nueva línea
        fwrite($fileHandle, $songName . PHP_EOL);
        fclose($fileHandle);
        echo "La canción '$songName' ha sido guardada exitosamente.";
    } else {
        echo "Hubo un error al guardar la canción.";
    }
} else {
    echo "No se recibió el nombre de la canción.";
}
