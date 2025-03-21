function registraLog (req, res, next) {
  console.log(`nova requisição ${(new Date()).toLocaleString()} - ${req.method} - ${req.path}`);
  next();
}

module.exports = registraLog;
