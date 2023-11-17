const express = require('express');
const dotenv = require('dotenv');
const usuarioRoutes = require('./routes/usuarioRoutes');
const lanceRoutes = require('./routes/lanceRoutes');
const leilaoRoutes = require('./routes/leilaoRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Rotas
app.use('/usuarios', usuarioRoutes);
app.use('/lances', lanceRoutes);
app.use('/leiloes', leilaoRoutes);

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('Bem-vindo à API!');
});

// Inicialização do servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
