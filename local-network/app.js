const express = require('express');
const app = express();
const port = 5050;
const router = require('./router');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});
app.use(router);
app.listen(port, () =>
  console.log(`Example app listening on http://127.0.0.1:${port} port!`)
);
