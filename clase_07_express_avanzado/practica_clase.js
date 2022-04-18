const express = require('express');
const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${server.address().port}`);
})

const frase = 'Hola cómo están';

// PETICIONES

/**
 * '/api/frase' -> devuelve la frase en forma completa en un campo ‘frase’.
 */
app.get('/api/frase', (req, res) => {
    res.json({
        result: frase,
        frase: frase
    })
})

/**
 * '/api/letras/:num  -> devuelve por número de orden la letra dentro de esa frase
(num 1 reﬁere a la primera letra), en un campo ‘letra’.
 */
app.get('/api/letras/:num', (req, res) => {
    res.json({
        result: frase[req.params.num],
        frase: frase
    })
});

/**
 * '/api/palabras/:num  -> devuelve por número de orden la palabra dentro de esa
frase (num 1 reﬁere a la primera palabra), en un campo ‘palabra’.
 */
app.get('/api/palabras/:num', (req, res) => {

});