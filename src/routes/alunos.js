const controller = require('../controllers/alunos');
const authMiddleware = require('../middlewares/auth');

module.exports = (app) => {
  app.get('/alunos', controller.buscarAlunos)
  app.get('/alunos/:id([0-9]+)', authMiddleware.validaSenha, controller.buscarAlunoPorId)
  app.get('/alunos/filtro', controller.buscarAlunoPorNome)
  app.post('/alunos', controller.cadastrarAluno)
  app.patch('/alunos/:id([0-9]+)', controller.atualizarAluno)
};
