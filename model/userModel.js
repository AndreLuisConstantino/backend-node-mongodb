const mongoose = require('mongoose')

const Usuario = mongoose.model('Usuario', {
    nome: {
        type: String
    },
    cpf: {
        type: String
    }, 
    data_nascimento: {
        type: Date
    }
})

module.exports = Usuario