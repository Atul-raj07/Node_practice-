const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/signup', (req, res) => {
    res.render('signup');
});

app.post('/create', (req, res) => {
    // Handle form submission logic here
    res.render('result');
});

app.listen(3100, () => {
    console.log('Listening on port 3100');
});
