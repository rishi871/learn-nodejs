let fs = require('fs');

fs.mkdir('stuff', (err) => {
    if (err) throw err;
})

fs.rmdir('stuff', (err) => {
    if (err) throw err;
})