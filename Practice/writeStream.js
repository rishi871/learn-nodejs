let http = require('http');
let fs = require('fs');

let myReadStream = fs.createReadStream('readandwrite.js');
let myWriteStream = fs.createWriteStream(__dirname + '/writeStream.txt');

myReadStream.on('data', function(chunk) {
    console.log('new chunk is recevied');
    //console.log(chunk);
    myWriteStream.write(chunk);
});


