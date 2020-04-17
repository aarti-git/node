// node server
var http = require('http');
var server = http.createServer(function(req, res){
    res.setHeader('content-type', 'text/html');
    res.end(`[${req.method}] ${req.url}`)
});

server.listen(1000)
console.log('server created successfuly!')