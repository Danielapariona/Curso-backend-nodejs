const express = require('express');

// Uso de multer (carga de archivo) - 1
const multer = require('multer');

const { Router } = express;
const PORT = 8080;

const app = express();
const router = Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Permite crear diferentes secciones de url
app.use('/api', router);

// Accede a la carpeta public
app.use(express.static('public'));

// Ocultar ruta de img
app.use('/static', express.static(__dirname + '/public'));

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});


/** MIDDLEWARE */
function myMiddleware1(req, res, next) {
    req.miAporte1 = 'dato aportado por myMiddleware 1';

    let logueado = false;
    if (logueado) {
        next();
    } else {
        throw 'Error forzado';
    }
}

function myMiddleware2(req, res, next) {
    req.miAporte2 = 'dato aportado por myMiddleware 2';
    next();
}


router.get('/mensajeConMiddleware', myMiddleware1, (req, res) => {
    let aporte = req.miAporte1;
    res.send({ aporte });
});

router.get('/mensajeConMiddlewareDoble', myMiddleware1, myMiddleware2, (req, res) => {
    let { miAporte1, miAporte2 } = req;
    res.send({ aporte1: miAporte1, segundoAporte: miAporte2 });
});

// SET STORAGE - Uso de multer - 2
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads'); // nombre de la carpeta en el servidor
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now());
    }
});

let upload = multer({ storage: storage });

// multer - Solo un archivo
router.post('/uploadFile', upload.single('myFile'), (req, res, next) => {
    const file = req.file;

    if (!file) {
        const error = new Error('please upload a file');
        error.httpStatusCode = 400;
        return next(error);
    }

    res.send(file);
})

// multer - Varios archivos
router.post('/uploadmultiple', upload.array('myFiles'), (req, res, next) => {
    const files = req.files;

    if (!files) {
        const error = new Error('Please choose files');
        error.httpStatusCode = 400;
        return next(error);
    }

    res.send(files);
})


// Manejo de error
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

router.get('/recurso', (req, res) => {
    res.send('get ok');
});

router.post('/recurso', (req, res) => {
    res.send('post ok');
});

const server = app.listen(PORT, () => {
    console.log(`Escuchando ${server.address().port}`);
});
