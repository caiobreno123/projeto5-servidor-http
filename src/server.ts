import http from 'http';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;
const devName = process.env.DEV_NAME || 'Desenvolvedor Anônimo';
const devAge = process.env.DEV_AGE || 'N/A';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  const message = `Servidor rodando para ${devName}, idade ${devAge}!`;
  res.end(message);
});

server.listen(port, () => {
  console.log(`Servidor funcionando em http://localhost:${port}`);
});

server.close(() => {
  console.log("Servidor encerrado.");
});

export default server;
