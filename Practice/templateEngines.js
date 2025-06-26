
let express = require('express');
let app = express();

app.set('view engine', 'ejs');


app.get('/', function(req, res){

    res.send('this is the home page')
});

app.get('/contact', function(req, res){
    res.send('this is contact page')
});


app.get('/profile/:name', function (req, res){
    let data = {age: 30, job: 'engieer', hobbies: ['eating', 'sleeping', 'fishing']};
    res.render('profile', {person: req.params.name, data: data});
});



app.listen(3000);