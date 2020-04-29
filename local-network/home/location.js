const data = {
  locationList: [
    {
      address: '神笔画室',
      phoneNum: getPhone(),
    },
    {
      address: '红叶网咖',
      phoneNum: getPhone(),
    },
  ],
};

function getPhone() {
  const phoneNum =
    '135' + Math.floor(Math.random() * (10 ** 8 - 10 ** 7) + 10 ** 7);
  return phoneNum;
}

module.exports = data;
