// -- Eje 2 min: 33

let products = [
    {
        id: 1,
        nombre: 'yerba',
        precio: 123
    },
    {
        id: 1,
        nombre: 'azucar',
        precio: 223
    },
    {
        id: 1,
        nombre: 'fideo',
        precio: 50
    }
]


// a) Los nombres de los productos en un string separados por comas
let productNames = products.map(e => e.nombre).join(', ');
// console.log(productNames);

// b) Precio total
let total = products.map(e => e.precio).reduce((a,b) => a + b, 0)
// let total = products.map(e => e.precio);

/* let total = 0;
products.forEach(e => {
    total += e.precio
});
console.log(total); */

// c) El precio promedio
const average = total / products.length;
// console.log('Promedio', average);

// d) El producto con menor precio
// const ord = products.sort((a,b) => a.precio > b.precio ?-1: 1);
// const max = ord[0];
// const min = ord[products.length - 1];
 
const max = Math.max.apply(null, products.map(e => e.precio));
const min = Math.min.apply(null, products.map(e => e.precio));

// f) Con los datos de los puntos 1 al 5 crear un objeto y representarlo por consola.
const o = {
    productNames,
    total,
    average,
    max,
    min
}

// console.log(o);



// Módulo nativos en Node.js 1:06min 1:14
