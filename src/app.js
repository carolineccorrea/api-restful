const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config();
const Cadastro = require('./models/Cadastro');
//conecta com o banco
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }).then(()=>{
      console.log('conexao com mongodb feita com sucesso');
  }).catch((err)=>{
      console.log('erro');
  });

//rotas
const indexRoute = require('./routes/index');
const cadastroRoute = require('./routes/cadastro');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/',indexRoute);
app.use('/cadastrar',cadastroRoute);

module.exports = app;