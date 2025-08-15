const express = require('express');
const app = express();

app.use(express.json());
app.use('/', express.static('public'));

app.listen(3000, () => {
  console.log('O servidor está rodando na porta 3000');
  console.log('http://localhost:3000');
});
