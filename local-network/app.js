const express = require('express');
const shoppingData = require('./shopping');
const detailData = require('./detail');
const homeData = require('./home.js');
const searchData = require('./search');
const recommendData = require('./recommend');

const app = express();
const port = 5050;

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/shopping', (req, res) => {
  res.send(shoppingData);
});
app.get('/detail', (req, res) => {
  detailData(req.query.id, (err, data) => {
    if (err) {
      return res.send({ err: 0 });
    }
    res.send(JSON.parse(data));
  });
});
app.get('/home', (req, res) => {
  res.send(homeData);
});
app.get('/search', (req, res) => {
  res.send(searchData);
});

app.get('/recommend', (req, res) => {
  res.send(recommendData);
});

app.listen(port, () =>
  console.log(`Example app listening on http://127.0.0.1:${port} port!`)
);
