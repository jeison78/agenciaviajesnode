//Configurar Express
// const express = require('express'); --->Version de Comand.jS
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

//Conectar la base de datos
db.authenticate()
    .then( () => console.log('Base de datos conectada') )
    .catch( error => console.log(error));

//Definir puerto
const port =process.env.PORT || 4000;

// Habilitar PUG
app.set('view engine', 'pug');

//Obtener el año actual
app.use( (req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();//.Local --> pasa valores de un archivo hacia una vista(De un archivo hacia otro)
    res.locals.nombresitio = "Agencia de Viajes"
    next();
});

//Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));


//Definir la carpeta publica
app.use(express.static('public'));

//Agregar router
app.use('/', router); //use(): soporta (post),(put),(pash) y (delete).


app.listen(port, () => {
    console.log(`El Servidor esta funcionando en el puerto ${port}`);

})