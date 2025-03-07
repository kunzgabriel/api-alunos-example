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

function cadastrarAluno (dados) {
  alunos.push(dados)
}

module.exports = {
  buscarAlunos,
  buscarAlunoPorId,
  cadastrarAluno
}
