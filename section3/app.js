const http = require('http');

// eventdriven - createServer precisa de argumentos para requisição feita e resposta a ser dado pelo servidor
const server = http.createServer((req, res) => {
  // apresentando o objeto request
  // a cada novo request o servidor loga estas informações
  console.log(req.url, req.method, req.headers);

  // proccess.exit(); derruba o servidor

  // trabalhando com a resposta que o servidor dará
  res.setHeader('Content-type', 'text/html')

  res.write('<html><head><title>Piroca</title></head>')
  res.write('<body><h1>Você acessou a melhor piroca</h1></body></html>')
  res.end();
});

server.listen(3000);

