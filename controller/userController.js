const express = require('express')
const cors = require('cors')

const router = express.Router()

const Usuario = require('../model/userModel.js')

//Permissões do cors
router.use((request, response, next) => {
    //Define quem poderá acessar a API (* = Todos)
    response.header('Acess-Control-Allow-Origin', '*')
    //Define quais métodos serão utilizados na API
    response.header('Acess-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    //Atribui as permissões ao Cors
    router.use(cors())

    next()
})

router.post('/user', (request, response) => {
    
    
})

module.exports = router