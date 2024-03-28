const express = require('express');
const app = express();

const funcionarioRoutes = require('./funcionario.js');
const userRoutes = require('./user.js');
const produtoRoutes = require('./produto.js');


require('./bd.js');

app.use(express.json());

app.use(funcionarioRoutes);
app.use(userRoutes);
app.use(produtoRoutes);

app.get('/', (req, res) => {
  res.send('Bem-vindo ao meu servidor Express!');
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express rodando na porta ${PORT}`);
});
