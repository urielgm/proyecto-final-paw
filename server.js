var http = require('http');
var fs = require('fs');

//Importando configuraciones
var config = require('./config/config');
var IP = config.IP,
    PORT = config.PORT;

var server = http.createServer(function(req, res){
    var url = req.url;
    if(req.url == "/"){
        url = '/index.html'
    }
    console.log(`> Recurso solicitado> ${url}`);
    var filePath = './static' +     url;
    console.log(`> Se servirá archivo: ${filePath}`);
    fs.readFile(filePath, 'utf8', function(err, content){
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
                    'Content-Type': 'text/html'
                });
                console.log('Sirviendo index.html');
                res.end(content);
        }
        });
    });

server.listen(PORT, IP, function(){
    console.log(`> Server corriendo en http://${IP}:${PORT}...`);
});