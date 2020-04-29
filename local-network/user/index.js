const router = require('../home');

router.post('/login', (req, res) => {
  let data = '';
  req.on('data', (chunk) => {
    data += chunk;
  });
  req.on('end', () => {
    const body = JSON.parse(data);
    const phoneNum =
      '135' + Math.floor(Math.random() * (10 ** 8 - 10 ** 7) + 10 ** 7);
    if (!body.user || !body.password) {
      return res.send({ status: 'error' });
    } else {
      return res.send({
        data: { ...body, password: '*****', phoneNum },
        status: 'ok',
      });
    }
  });
});

module.exports = router;
