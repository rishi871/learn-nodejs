let fs = require('fs')

let read = fs.readFileSync('event.js', 'utf8');
console.log(read);

fs.writeFileSync('write.txt', read)


/// Async

let readasync = fs.readFile('events_utils.js', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);

  fs.writeFile('writeMe.txt', data,  (err) => {
    if (err) throw err;
    console.log('File Successfully written!');
  } );
});


