var colors = require("colors");
colors.setTheme(require("../config/config").colorTheme);
var fortune = require("./fortune");

// Creando el handler
// getfortune
var _crackTheCookie = function(req, res){
    console.log("> Cookie crash requested...".info);
    fortune.getFortune(function(fortunePaperObj){
        // Preparando encabezados para contestar
        // Json
        res.writeHead(200,{
            "Content-Type" : "application/json"
        });
        // Respondiendo con el objeto
        res.end(fortunePaperObj);
    });
};

var _getAuthor = function(req, res){
    console.log("> Se solicito: Author..".info);
    res.end("Author: Ivan Rivalcoba");
};


// Creando Objeto manejador
var handlers = {};

// Registrando manejadores
handlers["/crackthecookie"] = _crackTheCookie;
handlers["/getAuthor"] = _getAuthor;

// Exportando objeto manejador
module.exports = handlers;