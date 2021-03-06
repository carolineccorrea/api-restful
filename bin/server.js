const app = require('../src/app');
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');


app.use(express.json());


app.use((req,res,next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});

app.listen(process.env.PORT || 8080);