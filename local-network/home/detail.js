const fs = require('fs');
const config = {
  1: 'fc',
  2: 'sfc',
  3: 'bsk',
};

function detailData(id, callback) {
  fs.readFile(`./data/${config[id]}.json`, (err, data) => {
    if (err) {
      return callback(err);
    }
    callback(null, data);
  });
}

module.exports = detailData;
