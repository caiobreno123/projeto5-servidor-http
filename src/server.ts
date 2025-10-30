import http from 'http';

const app = http.createServer((req, res) => {
  res.write('Servidor funcionando!');
  res.end();
});

if (require.main === module) {
  app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
}

export default app;
