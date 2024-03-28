

const express = require('express');
const mongoose = require('mongoose');

const routes = express.Router();

const userSchema = new mongoose.Schema({
    email: String,
    nome: String,
    senha: Number 
});
const user = mongoose.model('user', userSchema);


routes.post('/user', async(req, res) => {
    const { email, nome, senha } = req.body;
    const novoUser = new user({ email, nome, senha });
          try {
    await novoUser.save();
     return res.json(novoUser);

   } catch (error) {
    console.log(error)
   }
});

module.exports = routes;
