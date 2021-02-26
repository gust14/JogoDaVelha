// Módulo HTTP
var http = require('http');

// Módulo File System
var fs = require('fs');

// Cria o objeto server
var app = http.createServer(callback);

app.listen(3000); // Especifica a porta que vai escutar as requisições


function callback(req, res) {

     // Nome do arquivo
     var filename = req.url == "/" ? 'index.html' : __dirname + req.url;

     fs.readFile(filename, function (err, data) {
               if (err) {
                    res.writeHead(404);
                    return res.end('Arquivo não encontrado!');
               }

               if (req.url.indexOf(".css") != -1)
                    res.setHeader('content-type', 'text/css');
               else if (req.url.indexOf(".js") != -1)
                    res.setHeader('content-type', 'text/javascript');
               else
                    res.setHeader('content-type', 'text/html');

               res.writeHead(200);
               res.end(data);
          }
     );
}