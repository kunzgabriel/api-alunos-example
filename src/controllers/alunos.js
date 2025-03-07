const service = require('../services/alunos');

function buscarAlunos (req, res) {
  const alunos = service.buscarAlunos();
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

module.exports = {
  buscarAlunos,
  buscarAlunoPorId,
  cadastrarAluno
}
