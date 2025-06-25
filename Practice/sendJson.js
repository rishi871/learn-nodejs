let http = require('http');
let fs = require('fs');

let server = http.createServer(function(req,res) {

    console.log('request was made: ' + req.url );
    res.writeHead(200, {'Content-Type': 'application/json'});
    var myObj = {
        name: 'Rishi',
        job: 'Engineer',
        age: 30
    };
    res.end(JSON.stringify(myObj));

});

server.listen(3000, '127.0.0.1');
console.log('listeningin to port 3000')