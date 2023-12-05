const express = require('express');
const res = require('express/lib/response');
const app = express();
const port = 3000;

//Middleware para processar dados Json
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Olá, mundo!');
  });

// Rota com método POST
app.post('/seu-endpoint', (req, res) => {
    console.log('Recebido POST em /seu-endpont');
    const data = req.body;
    console.log('Dados recebidos: ', data);

    const nomeRecebido = req.body.nome;
    const idadeRecebida = req.body.idade;
    const emailRecebido = req.body.email;

    const mensagemResposta = 'Dados recebidos - Nome : ${nomeRecebido}, Idade: ${idadeRecebida}, Email: ${emailRecebido}';

    res.send('Requisição POST recebida com sucesso!');


});

app.listen(port, () => {
    console.log('Servidor express está rodando na porta ${port}');
});
