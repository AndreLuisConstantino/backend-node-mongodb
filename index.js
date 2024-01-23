const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Constantes MongoDB
const DB_USER = 'andreluis081205';
const DB_PASSWORD = 'xyo89jnI4wjJvS0S';
const STRING_CONNECTION = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@clutermongo.9squ8xn.mongodb.net/`;

const app = express();

app.use(express.json());
app.use(cors());

const userController = require('./controller/userController.js');
app.use('/', userController);

try {
    mongoose.connect(STRING_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
} catch (err) {
    console.log('Erro na conexão com o banco de dados:', err)
}

app.listen(8080, () => console.log('Servidor rodando na porta 8080'));
