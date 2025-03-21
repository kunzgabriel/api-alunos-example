const service = require('../services/alunos');

function buscarAlunos (req, res) {
  const alunos = service.buscarAlunos(req.query);
  return res.status(200).json(alunos);
}

function buscarAlunoPorId (req, res) {
  const aluno = service.buscarAlunoPorId(req.params.id);
  if (!aluno) {
    return res.status(404).json({
      erro: `O aluno com id ${req.params.id} não foi encontrado`
    })
  }
  return res.status(200).json(aluno);
}

function buscarAlunoPorNome (req, res) {
  const aluno = service.buscarAlunoPorNome(req.query.nome);
  if (!aluno) {
    return res.status(404).json({
      erro: `O aluno com nome ${req.query.nome} não foi encontrado`
    })
  }
  return res.status(200).json(aluno);
}

function cadastrarAluno (req, res) {
  const data = req.body;
  // validar campos obrigatorios;
  if (!data.id || !data.nome || !data.idade) {
    return res.status(400).json({
      erro: 'campos obrigatórios faltando'
    })
  }
  service.cadastrarAluno(data);
  return res.status(201).json({
    message: 'aluno inserido com sucesso'
  })
}

async function atualizarAluno (req, res) {
  const data = {
    ...req.body,
    id: req.params.id
  }

  if (!Object.hasOwn(data, 'nome') && !Object.hasOwn(data, 'idade')) {
    return res.status(400).json({
      message: 'informe ao menos um campo para atualizar o dado'
    })
  }

  const aluno = service.atualizarAluno(data)
  return res.status(200).json(aluno)
}

module.exports = {
  buscarAlunos,
  buscarAlunoPorId,
  cadastrarAluno,
  buscarAlunoPorNome,
  atualizarAluno
}
