import http from 'http';
import dotenv from 'dotenv';
import path from 'path';

// 🔹 Garante que o .env seja carregado a partir da raiz do projeto
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// 🔹 Lê as variáveis com fallback seguro
const port = Number(process.env.PORT) || 3001;
const devName = process.env.DEV_NAME || 'Desenvolvedor Anônimo';
const devAge = process.env.DEV_AGE || 'N/A';

// 🔹 Cria o servidor HTTP
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  const message = `Servidor rodando para ${devName}, idade ${devAge}!`;
  res.end(message);
});

// 🔹 Inicia o servidor
server.listen(port, () => {
  console.log('✅ Variáveis de ambiente carregadas com sucesso!');
  console.log(`👤 Nome: ${devName}`);
  console.log(`🎂 Idade: ${devAge}`);
  console.log(`🚀 Servidor funcionando em http://localhost:${port}`);
});

export default server;
