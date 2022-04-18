const express = require('express');
const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Escuchando en la aplicacion ${server.address().port}`);
});

app.get('/productos', (req, res) => {
    let productos = [
        {
            nombre: 'heladera',
            precio: 100
        },
        {
            nombre: 'heladera2',
            precio: 100
        }
    ]
    let html = '<p>Productos:<p><ul>'

    productos.forEach((producto)=> {
        html += '<li>' + producto.nombre + '</li>'
    });

    html += '</ul>'
    
    res.send(html);

});

// Manejador de errores
server.on("error", error =>
    console.log(`Error en el servidor ${error}`));