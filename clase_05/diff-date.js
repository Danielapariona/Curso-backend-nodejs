// Cuantos años y días totales transcurrieron desde la fecha de tu nacimiento
const moment = require('moment');

let a = moment();
// let b = moment([1993,06,21]);
let b = moment("1993-06-21").toDate();

console.log(
    a.diff(b, 'years')
);

console.log(
    a.diff(b, "days")
);