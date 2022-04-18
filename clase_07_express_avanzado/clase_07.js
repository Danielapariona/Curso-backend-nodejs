const express = require('express');
const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${server.address().port}`);
})

/**
 * {extended:true} precisa que el objeto req.body contendrá
valores de cualquier tipo en lugar de solo cadenas. 
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/productos', (req, res) => {
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

    if(Object.entries(req.query).length > 0) {
        res.json({
            result: 'Get all with params',
            productos: productos,
            query: req.query
        })
        // http://localhost:8080/api/productos?marca=phillip&precioMenor=100
    } else {
        res.json({
            result: 'Get all without params',
            productos: productos
        })
        // http://localhost:8080/api/productos
    }

    res.json({ result: productos });
});

app.get('/api/productos/:id', (req, res) => {
    let productos = [
        {
            nombre: 'heladera',
            precio: 100
        },
        {
            nombre: 'heladera2',
            precio: 50
        }
    ]

    res.json({
        result: 'Get by id',
        producto: productos[req.params.id]
    })
});


app.post('/api/productos', (req, res) => {
    // let nuevoProducto = req.body;

    res.json({
        result: 'Save product',
        body: req.body
    })
})

app.put('/api/productos/:id', (req, res) => {
    res.json({
        result: 'Edit by id',
        id: req.params.id,
        body: req.body
    })
})

app.delete('/api/productos/:id', (req, res) => {
    res.json({
        result: 'Delete by id',
        id: req.params.id
    })
})
