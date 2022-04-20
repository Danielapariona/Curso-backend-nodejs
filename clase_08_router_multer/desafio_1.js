const express = require('express');
const { Router } = express;
const PORT = 8080;

const app = express();
const router = Router();
const routerMascota = Router();
const routerPersonas = Router();

/**
 * {extended:true} precisa que el objeto req.body contendrá
valores de cualquier tipo en lugar de solo cadenas. 
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/mascotas', routerMascota);
app.use('/personas', routerPersonas);

/**
 * Crear un servidor que permita manejar una lista de mascotas y personas. 
 * Debe poseer dos rutas principales: '/mascotas' y '/personas', las cuales deben incluir métodos para listar y para agregar recursos:
 * GET: devolverá la lista requerida en formato objeto.
 * POST: permitirá guardar una persona ó mascota en arrays propios en
memoria, con el siguiente formato: Persona -> { "nombre": ..., "apellido": ..., "edad":... } Mascota -> { "nombre":..., "raza":..., "edad":... }
 */

routerMascota.get('/', (req, res) => {
    const mascotas = [{ nombre: "Fifi", raza: 'Podle', edad: 1 }, { nombre: "Lucas", raza: 'Beagle', edad: 2 }, { nombre: "Estrella", raza: 'Beagle', edad: 3 }];
    res.send(mascotas);
});

routerMascota.post('/', (req, res) => {
    res.json({ objeto: req.body });
});

routerPersonas.get('/', (req, res) => {
    const personas = [{ nombre: 'Daniela', apellido: 'Pariona', edad: 28 }, { nombre: 'Gabriela', apellido: 'Pariona', edad: 26 }];
    res.send(personas);
});

routerPersonas.post('/', (req, res) => {
    res.json({ objeto: req.body });
});

const server = app.listen(PORT, () => {
    console.log(`Escuchando ${server.address().port}`);
})
