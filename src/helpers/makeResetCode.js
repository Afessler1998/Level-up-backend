function makeResetCode() {
  return Math.floor(Math.random() * 899999 + 100000);
}

module.exports = makeResetCode;
