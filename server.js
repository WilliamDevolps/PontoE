
const express = require('express');
require('./bd.js');
const routes = require('./index.js');
const app = express();
app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
  res.send('Bem-vindo ao meu servidor Express!');
});

app.listen(3000, () => {
  console.log('Servidor Express rodando na porta 3000');
});
