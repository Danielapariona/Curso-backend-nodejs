const express = require('express');
const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});

// PETICIONES

app.get('/', (req, res) => {
    res.send({ mensaje: 'Hola mudno' })
});


// Manejador de errores
server.on("error", error =>
    console.log(`Error en el servidor ${error}`));
