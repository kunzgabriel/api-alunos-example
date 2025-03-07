const controller = require('../controllers/alunos');

module.exports = (app) => {
  app.get('/alunos', controller.buscarAlunos)
  app.get('/alunos/:id([0-9]+)', controller.buscarAlunoPorId)
  app.post('/alunos', controller.cadastrarAluno)
};
