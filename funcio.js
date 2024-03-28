

const express = require('express');
const mongoose = require('mongoose');

const routes = express.Router();

const funcionarioSchema = new mongoose.Schema({
    nome: String,
    cargo: String,
    salario: Number
});
const Funcionario = mongoose.model('Funcionario', funcionarioSchema);


routes.post('/funcionarios', async(req, res) => {
    const { nome, cargo, salario } = req.body;
    const novoFuncionario = new Funcionario({ nome, cargo, salario });
          try {
    await novoFuncionario.save();
     return res.json(novoFuncionario);

   } catch (error) {
    console.log(error)
   }
});

module.exports = routes;
