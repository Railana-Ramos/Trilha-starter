// Importa o framework Express para dentro do nosso projeto (permite criar o servidor e rotas)
const express = require('express');

// Cria uma instância do Express. É a nossa aplicação/servidor principal, que vamos chamar de 'app'
const app = express();

// Configura um "middleware": ensina o servidor a traduzir os dados que chegam no formato JSON (corpo da requisição)
app.use(express.json());

// Simula um "banco de dados" temporário utilizando um array (uma lista) guardado na memória RAM do computador
let alunos = [
  { id: 1, nome: "Ana", idade: 20 },     // Primeiro objeto aluno cadastrado de fábrica
  { id: 2, nome: "Carlos", idade: 22 }   // Segundo objeto aluno cadastrado de fábrica
];

// --- 1. GET: Rota para buscar/listar todos os alunos ---
// Quando alguém fizer um GET na URL '/api/alunos', essa função será executada
app.get('/api/alunos', (req, res) => {
  res.json(alunos); // Responde para quem chamou enviando a lista completa de alunos em formato JSON
});

// --- 2. POST: Rota para cadastrar um novo aluno ---
// Quando alguém fizer um POST na URL '/api/alunos' mandando dados, essa função será executada
app.post('/api/alunos', (req, res) => {
  
  // Cria um objeto novo com os dados enviados pelo cliente
  const novoAluno = {
    id: alunos.length + 1,        // Gera um ID simples somando 1 à quantidade atual de alunos
    nome: req.body.nome,          // Pega o nome enviado no corpo (body) da requisição
    idade: req.body.idade         // Pega a idade enviada no corpo (body) da requisição
  };

  alunos.push(novoAluno);         // Adiciona esse novo aluno dentro do nosso array 'alunos'
  res.status(201).json(novoAluno); // Responde com o status HTTP 201 (Criado com sucesso) e devolve o objeto criado
});

// --- 3. DELETE: Rota para remover um aluno pelo ID ---
// O ':id' na rota funciona como uma variável dinâmica (ex: /api/alunos/1 ou /api/alunos/2)
app.delete('/api/alunos/:id', (req, res) => {
  
  // Pega o valor do ID que veio na URL e converte de texto para número inteiro
  const idParaExcluir = parseInt(req.params.id);
  
  // Filtra o array: mantém apenas os alunos cujo ID seja DIFERENTE daquele que queremos excluir
  alunos = alunos.filter(aluno => aluno.id !== idParaExcluir);
  
  res.status(204).send(); // Responde com o status HTTP 204 (Sucesso, mas sem conteúdo para retornar no corpo)
});

// Faz o servidor escutar requisições na porta 3000 do computador
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
