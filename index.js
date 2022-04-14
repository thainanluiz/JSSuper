// Is A Number function
async function isANumber(value) {
  return typeof value == "number" ? true : false;
}

// Random Int between two numbers
async function randomINT(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Delay
async function delay(ms = 1000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Random Delay
async function randomDelay(max = 60000) {
  return new Promise((resolve) =>
    setTimeout(resolve, Math.floor(Math.random() * (max - 0 + 1)) + 0)
  );
}

// Repeater
async function repeater(func, times, delay = 0) {
  for (let i = 0; i < times; i++) {
    await func();
    await module.exports.delay(delay);
  }
}

function isset(value) {
  return value !== undefined && value !== null;
}

module.exports = {
  isANumber,
  randomINT,
  delay,
  randomDelay,
  repeater,
  isset,
};
