const alunos = [
  { id: 1, nome: 'Gabriel', idade: 24 },
  { id: 2, nome: 'Pedro', idade: 22 },
  { id: 3, nome: 'Paulo', idade: 19 },
  { id: 4, nome: 'Lucas', idade: 90 },
  { id: 5, nome: 'José', idade: 82 },
  { id: 6, nome: 'Milton', idade: 25 },
  { id: 7, nome: 'Carlos', idade: 12 }
];

function buscarAlunos () {
  return alunos;
}

function buscarAlunoPorId (id) {
  return alunos.find(el => el.id == id);
}

function buscarAlunoPorNome (nome) {
  return alunos.find(el => el.nome == nome)
}

function cadastrarAluno (dados) {
  alunos.push(dados)
}

function atualizarAluno (dados) {
  const alunoExiste = buscarAlunoPorId(dados.id);
  if (!alunoExiste) {
    return 'erro';
  }

  if (Object.hasOwn(dados, 'idade')) {
    alunoExiste.idade = dados.idade;
  }

  if (Object.hasOwn(dados, 'nome')) {
    alunoExiste.nome = dados.nome;
  }

  return alunoExiste;
}

module.exports = {
  buscarAlunos,
  buscarAlunoPorId,
  buscarAlunoPorNome,
  cadastrarAluno,
  atualizarAluno
}
