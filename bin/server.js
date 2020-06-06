const app = require('../src/app');
const express = require('express');
const bodyParser = require('body-parser')
var cors = require('cors')



app.use(express.json());

app.use((req,res,next) =>{
    res.header("Access-Control-Allow-Origin","*");
    app.use(cors());
    next();
});



app.listen('8080',()=>{
    console.log('servidor iniciado na porta 8080!')
});