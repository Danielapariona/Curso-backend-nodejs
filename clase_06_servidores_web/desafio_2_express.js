const express = require('express');
const app = express();
const PORT = '8080';
let cantidadVisitas = 0;

// Escuchando
const server = app.listen(PORT, () => {
    console.log(`Aplicación escuchando en ${server.address().port}`)
});

// Peticiones
app.get('/', (req, res) => {
    res.send('<h1 style="color: 0000FF">Bienvenidos al servidor express</h1>')
});

app.get('/visitas', (req, res) => {
    cantidadVisitas++;
    res.send({
        cantidad: cantidadVisitas
    })
});

app.get('/hola', (req, res) => {
    res.send({
        mensaje: 'Bienvenido'
    })
});

// Manejador de errores
app.on("Error", error => {
    console.log(`Error ${error}`);
})