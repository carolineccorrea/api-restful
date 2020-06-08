const mongoose = require('mongoose');
const Cadastro = mongoose.model('Cadastro');


exports.get = (req,res,next) => {
    Cadastro.find({}).then( data => {
         res.send(data);
     }).catch((err)=>{
        res.status(400).json({
            error: true,
            message: "nenhum cadastro encontrado"
        });
     });
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

exports.put = (req,res,next) => {
    Cadastro.findByIdAndUpdate({_id: req.params.id},req.body, {upsert: true}, 
        function(err){
        if (err) {
            res.status(500).json({ error: err.message });
            res.end();
            return;
        }
        res.json(req.body);
        res.end();
    })
};

exports.delete = (req,res,next) => {
    Cadastro.findOneAndRemove(req.params.id)
    .then(x => {
        res.status(200).send({
            message: 'Produto deletado com sucesso'
        })
    })
    res.status(200).send(req.body);
}