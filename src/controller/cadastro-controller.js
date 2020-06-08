const mongoose = require('mongoose');
const Cadastro = mongoose.model('Cadastro');
const repository = require('../repository/cad-repository');


exports.get = async(req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Nenhum cadastro encontrado'
        });
    }
}

exports.post = (req,res,next) => {
    var cadastro = new Cadastro(req.body);
    cadastro.save().then(x=>{
        res.status(201).send({ message: "Cadastrado com sucesso" });
        console.log("cadastrado com sucesso");
   }).catch(e=>{
        res.status(400).send({ message: "erro" ,data: e});
   })
};

exports.put = async(req, res, next) => {
    try {
        await repository.update(req.params.id, req.body);
        res.status(200).send({
            message: 'Cadastro atualizado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.delete = async(req, res, next) => {
    try {
        await repository.delete(req.body.id);
        res.status(200).send({
            message: 'Produto removido com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}