const router = require('../home');

router.post('/login', (req, res) => {
  let data = '';
  req.on('data', (chunk) => {
    data += chunk;
  });
  req.on('end', () => {
    const body = JSON.parse(data);
    const name = ['张飞', '刘备', '关羽', '诸葛亮', '周瑜'][
      Math.round(Math.random() * 4)
    ];
    if (!body.user || !body.password) {
      return res.send({ status: 'error' });
    } else {
      return res.send({
        data: { ...body, password: '*****', name },
        status: 'ok',
      });
    }
  });
});

module.exports = router;
