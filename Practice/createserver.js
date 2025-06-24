let http = require('http');
const { listenerCount } = require('process');

let server = http.createServer((req, res) {
    console.log('request was made ' + req.url);
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end("Hello World")
});


server.listen(3000, 'localhost');
console.log('Now listen to Port 3000')