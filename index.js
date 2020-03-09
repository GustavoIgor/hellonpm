const http = require('http');

//Brazil mocker
const { Form } = require('brazil-mocker');

let nome;

http.createServer((req, res) => {
    //gera nomes aleatorios a cada refresh
    nome = Form.names.firstName.generate('random', true);
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'});
    res.end('Olá, ' + nome);
}).listen(3000);

console.log('O node esta rodando na porta 3000, para encerrar o serviço pressione Ctrl + C');