var http = require('http');
var fs = require('fs');
var mime = require('mime');

//Importando configuraciones
var config = require('./config/config');
var IP = config.IP,
    PORT = config.PORT;

var server = http.createServer(function(req, res){
    url = req.url;
    if(req.url === "/"){
        url = '/index.html'
    }
    // Generar la ruta real
    // del archivo solicitado
    console.log(`> Recurso solicitado> ${url}`);
    var filePath = './static' +     url;
    console.log(`> Se servirá archivo: ${filePath}`);

    // Selecionar el tipo mie
    var mimeType = mime.lookup(filePath);


    fs.readFile(filePath,
     function(err, content){
        if(err){
            //Hubo un error
                res.writeHead(500,{
                    'Content-Type': "text/html"
                });
                console.log('> Error en la lectura de un archivo: l20 server.js');
                res.end("<h1>Error interno</h1>");
        }else{
            //No hubo error
                res.writeHead(200,{
                    'Content-Type': mimeType
                });
                console.log(`> Sirviendo: ${filePath}`.data);
                res.end(content);
        }
        });
    });

server.listen(PORT, IP, function(){
    console.log(`> Server corriendo en http://${IP}:${PORT}...`);
});