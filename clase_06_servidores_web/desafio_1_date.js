/**
 * Desarrollar un servidor en node.js que escuche peticiones en el puerto 8080 y
responda un mensaje de acuerdo a la hora actual:
- Si la hora actual se encuentra entre las 6 y las 12 hs será 'Buenos días!'.
- Entre las 13 y las 19 hs será 'Buenas tardes!'.
- De 20 a 5 hs será 'Buenas noches!'.
 */
const http = require('http');

const server = http.createServer((req, res) => {

    res.end('Ejercicio fecha');
});


const connectedServer = server.listen('8081', () => {
    console.log(`Puerto escuchando ${connectedServer.address().port}`);
})