const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser);

app.listen(3000, (err) => {
    if(err){
        console.log("Error starting express server: ". err);
    }
    console.log("Server started...");
});