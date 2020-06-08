const mongoose = require('mongoose');
const Cadastro = mongoose.model('Cadastro');


exports.get = async() => {
    const res = await Cadastro.find({});
    return res;
}


exports.create = async(data) => {
    var cadastro = new Cadastro(data);
    await cadastro.save();
}

exports.update = async(id, data) => {
    await Cadastro
        .findByIdAndUpdate(id, {
            $set: {
                title: data.title,
                description: data.description,
                price: data.price,
                slug: data.slug
            }
        });
}

exports.delete = async(id) => {
    await Cadastro
        .findOneAndRemove(id);
}