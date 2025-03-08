const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res, next) => {
    res.send("<h1>Hello from expressJS!</h1>");
});

app.get('/add-product', (req, res, next) => {
    res.send("<form action='/add-product' method='POST'><input type='text' name='title'><button type='submit'>Add me</button></input></form>")
});

app.post('/add-product', (req, res, next) => {
    console.log("Value at line 17: ", req.body);
    res.redirect('/');
});

app.use((req, res, next) => {
    res.status(404).send("<h1>Page not found!</h1>");
});

app.listen(3000, (err) => {
    if(err){
        console.log("Error starting express server: ". err);
    }
    console.log("Server started...");
});