function makeId() {
  //Generates a random value between 0 and 1, then converts it to base 36
  //and returns the first 9 digits after the decimal
  return Math.random().toString(36).substr(2, 9);
}

module.exports = makeId;
