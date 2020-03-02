const http = require('http');

const { Form } = require('brazil-mocker');

let nome = Form.names.firstName.generate('random', true);

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'});
    res.end('Olá, ' + nome);
}).listen(3000);

console.log('O node esta rodando na porta 3000, para encerrar o serviço pressione Ctrl + C');