const fs = require('fs');

// persistir usuarios


class ContenedorUsuario {

    constructor() {
        this.nombreArchivo = './usuarios.json';
        this.id = 1;
    }

    save(nombre, edad) {
        let usuario = {
            nombre: nombre,
            edad: edad,
            id: this.id
        }
        let usuarios = [];

        try {
            let file = fs.readFileSync(this.nombreArchivo, 'utf-8');
            usuarios = JSON.parse(file);
        } catch (error) {
            console.log('No hay archivo');
        }


        usuarios.push(usuario);
        fs.writeFileSync(this.nombreArchivo, JSON.stringify(usuarios));
        this.id++;
    }

    getById(id) {
        let usuarios = [];

        try {
            let file = fs.readFileSync(this.nombreArchivo, 'utf-8');
            usuarios = JSON.parse(file);
        } catch (error) {
            console.log('No hay archivo');
        }

        let usuario = null;

        usuarios.forEach(user => {
            if (user.id == id) {
                usuario = user;
            }
        });

        return usuario;
    }
}

let contenedor = new ContenedorUsuario();
contenedor.save('Diego', 28);
contenedor.save('Agustin', 26);
contenedor.save('Maria', 26);
console.log(contenedor.getById(2));