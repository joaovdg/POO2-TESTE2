const http = require('http');

const server = http.createServer((req, res) => {
  // Configuração do cabeçalho da resposta
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Envio da resposta
  res.end('Servidor HTTP básico funcionando!\n');
});

const port = process.env.PORT || 3000;

// Inicialização do servidor
server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
