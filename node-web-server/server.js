const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    // res.send('<h1>Hello Express!</h1>');
    res.send({
        name: 'Andrew',
        likes: [
            'Biking', 
            'Cities'
        ]
    })
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    })
})

app.get('/bad', (req, res) => {
    res.send({
        request: 'Bad one',
        fix: 'I dont know'
    })
})
app.listen(8000, () => {
    console.log('Server is up on port 8000');
});