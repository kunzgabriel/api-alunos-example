// importa o pacote do express;
const express = require('express');
// cria uma instancia do express para a nossa API;
const app = express();
// cria uma constante para definir a PORTA onde a aplicação roda;
const PORT = 3000;

const logger = require('./middlewares/logger')

app.use(express.json());
app.use(logger)

app.get('/', (req, res) => {
  const hello = {
    message: 'OLÁ MUNDO!'
  }
  return res.json(hello);
});

require('./routes')(app);

// abre a API para receber requisições na PORTA definida.
app.listen(PORT, () => {
  console.log(`api rodando na porta ${PORT}`)
});
