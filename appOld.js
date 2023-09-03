
const http = require('http');

http.createServer( ( request, response ) => {

    console.log(request);

    //response.writeHead(200, { 'Content-Type': 'application/json' });
    response.setHeader('Content-Disposition','attachment; filename=lista.csv');
    response.writeHead(200, { 'Content-Type': 'application/csv' });

    response.write('id, nombre\n');
    response.write('1, Fernando\n');
    response.write('2, Micaela\n');
    response.write('3, Nahuel\n');

    //const persona = {
    //    id: 1,
    //    nombre: 'Fernando'
    //}

    //response.write( JSON.stringify( persona) );
    response.end();

})
.listen( 8080 );

console.log("Escuchando 8080");