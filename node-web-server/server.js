const express = require('express');

var app = express();

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
    res.send('About Page')
})

app.get('/bad', (req, res) => {
    res.send({
        request: 'Bad one',
        fix: 'I dont know'
    })
})
app.listen(8000);