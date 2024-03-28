const express = require('express');
const mongoose = require('mongoose');

const routes = express.Router();

const produtoSchema = new mongoose.Schema({
    nome: String,
    preco: Number,
    quantidade: Number 
});
const produto = mongoose.model('produto', produtoSchema);


routes.post('/produto', async(req, res) => {
    const { nome, preco, quantidade } = req.body;
    const novoProduto = new produto({ nome, preco, quantidade });
          try {
    await novoProduto.save();
     return res.json(novoProduto);

   } catch (error) {
    console.log(error)
   }
});

module.exports = routes;
