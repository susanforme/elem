const express = require('express');
const shoppingData = require('./shopping');
const app = express();
const port = 5051;

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/shopping', (req, res) => {
  res.send(shoppingData);
});
app.get('/detail', (req, res) => {
  console.log(req.query.id);
  res.end();
});
app.listen(port, () => console.log(`Example app listening on ${port} port!`));
