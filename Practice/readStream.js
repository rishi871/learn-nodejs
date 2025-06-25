let http = require('http');
let fs = require('fs');

let myReadStream = fs.createReadStream('readandwrite.js');

myReadStream.on('data', function(chunk) {
    console.log('new chunk is recevied');
    console.log(chunk);
});

//test with utf8


let myReadStreamutf8 = fs.createReadStream('/tmp/com.citrix.ctxworkspaceupdater.err', 'utf8');

myReadStreamutf8.on('data', function(chunk) {
    console.log('new chunk is recevied');
    console.log(chunk);
});