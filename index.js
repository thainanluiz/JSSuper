function isANumber(number) {
  try {
    return typeof number == "number" ? true : false;
  } catch (error) {
    return false;
  }
}

function randomINT(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
  isANumber,
  randomINT,
};
