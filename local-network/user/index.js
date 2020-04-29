const router = require('../home');

router.post('/login', (req, res) => {
  let data = '';
  req.on('data', (chunk) => {
    data += chunk;
  });
  req.on('end', () => {
    if (!data) {
      return res.send({ status: 'error' });
    } else {
      console.log(data);
      const body = JSON.parse(data);
      return res.send({ data: { ...body, password: '*****' }, status: 'ok' });
    }
  });
});

module.exports = router;
