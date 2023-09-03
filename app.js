const express = require('express')
const app = express()
const port = 8080;

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
app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo');
});

app.get('*', (req, res) => {
    //res.send('404 - Page not found');
    res.sendFile(__dirname + '/public/404.html');
});

app.listen( port, () => {
    console.log( `Escuchando puerto: ${port}`);
});
