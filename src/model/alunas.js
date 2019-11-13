const mongoose = require('mongoose')

const AlunasSchema = new mongoose.Schema ({
    nome: {type: String},
    dateOfBirth: {type: String},
    nasceuEmSp: {type: Boolean},
    livros: [{
        titulo: String,
        leu: Boolean,
    }]

})


const Alunas = mongoose.model('Alunas', AlunasSchema);

module.exports = Alunas