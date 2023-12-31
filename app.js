require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

//Handlebars
app.set('view engine','hbs');
hbs.registerPartials( __dirname + '/views/partials');

// servir contenido estático
app.use( express.static('public'));
//si no hay una estructura en las carpetas para responde sigue en las líneas siguientes


//no se ejecuta esta linea por el app.use anterior
/*
app.get('/', (req, res) => {
  res.send('Home page');
});
*/

//si dentro de public crei una carpeta hola-mundo, no va a ejecutar esta línea
//app.get('/hola-mundo', (req, res) => {
//    res.send('Hola mundo');
//});

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Fernando Herrera',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    //res.sendFile(__dirname + '/public/generic.html');
    res.render('generic', {
        nombre: 'Fernando Herrera',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    //res.sendFile(__dirname + '/public/elements.html');
    res.render('elements', {
        nombre: 'Fernando Herrera',
        titulo: 'Curso de Node'
    });
});

app.get('*', (req, res) => {
    //res.send('404 - Page not found');
    res.sendFile(__dirname + '/public/404.html');
});

app.listen( port, () => {
    console.log( `Escuchando puerto: ${port}`);
});
