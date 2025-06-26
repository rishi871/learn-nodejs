
let express = require('express');
let app = express();

app.get('/', function(req, res){

    res.send('this is the home page')
});

app.get('/contact', function(req, res){
    res.send('this is contact page')
});

//exploring route param
app.get('/profile/:name', function (req, res){
    res.send('You have requested to the see a Profile with name ' + req.params.name)
});



app.listen(3000);