const fs = require('fs'),
http = require('http'),
port = 5000;

const server = http.createServer(function server(request, reponse){
let file;

switch (require.url) {
    case "/":
        file = 'index.html'
        break;
    case "/ninjas":
        file = 'ninjas.html'
        break;
    case "/dojos/new":
        file = 'dojos.html'
        break;
    default:
        file = null;
        break;
}
if (file !== null) {
fs.readFile(`static/${file}`, 'utf8', function(error, contents){
    if (error) { console.log(err); }
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(contents);
    response.end();
});
} else {
    response.writeHead(404);
    response.end("File not found!");
}
});

server.listen(port, function(){
    console.log("Running on port: ", port);
});