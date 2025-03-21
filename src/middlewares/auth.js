const SENHA_SEGURA = 'batataquente123';

function validaSenha (req, res, next) {
  const senha = req.query.senha;
  if (!senha || senha != SENHA_SEGURA) {
    return res.status(403).json({ message: 'Acesso negado!' });
  }

  req.body.autorizado = true;
  next();
}

module.exports = {
  validaSenha
}
