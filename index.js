// 2.0.0 Functions
// isNum function
function isNum(value) {
  return typeof value == "number";
}

// isStr function
function isStr(value) {
  return typeof value == "string";
}

// isBool function
function isBool(value) {
  return typeof value == "boolean";
}

// isFunc function
function isFunc(value) {
  return typeof value == "function";
}

// isObj function
function isObj(value) {
  return typeof value == "object";
}

// isSymb function
function isSymb(value) {
  return typeof value == "symbol";
}

// hasValue function
function hasValue(value) {
  return typeof value != "undefined" && value != undefined && value !== null;
}

// randomInt function

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// fixedDelay function
async function fixedDelay(ms = 1000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// dynamicDelay function
async function dynamicDelay(max = 60000) {
  return new Promise((resolve) =>
    setTimeout(resolve, Math.floor(Math.random() * (max - 0 + 1)) + 0)
  );
}

// fixedRepeater function
async function fixedRepeater(func, times = 1, delay = 0) {
  for (let i = 0; i < times; i++) {
    await func();
    await fixedDelay(delay);
  }
}

// Deprecated Functions
// Old Is A Number function
/**
 * @deprecated Since version 2.0.0 Will be deleted in version 3.0.0 Use isNum instead.
 */
function isANumber(value) {
  return typeof value == "number" ? true : false;
}

// Old Random Int function
/**
 * @deprecated Since version 2.0.0 Will be deleted in version 3.0.0 Use randomInt instead.
 */
async function randomINT(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Old Delay function
/**
 * @deprecated Since version 2.0.0 Will be deleted in version 3.0.0 Use fixedDelay instead.
 */
async function delay(ms = 1000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Old Random Delay function
/**
 * @deprecated Since version 2.0.0 Will be deleted in version 3.0.0 Use dynamicDelay instead.
 */
async function randomDelay(max = 60000) {
  return new Promise((resolve) =>
    setTimeout(resolve, Math.floor(Math.random() * (max - 0 + 1)) + 0)
  );
}

// Old Repeater function
/**
 * @deprecated Since version 2.0.0 Will be deleted in version 3.0.0 Use fixedRepeater instead.
 */
async function repeater(func, times, delay = 0) {
  for (let i = 0; i < times; i++) {
    await func();
    await module.exports.delay(delay);
  }
}

// Old Isset function
/**
 * @deprecated Since version 2.0.0 Will be deleted in version 3.0.0 Use hasValue instead.
 */
function isset(value) {
  return value !== undefined && value !== null;
}

// Exports
module.exports = {
  isANumber,
  randomINT,
  delay,
  randomDelay,
  repeater,
  isset,
  isNum,
  isStr,
  isBool,
  isFunc,
  isObj,
  isSymb,
  hasValue,
  randomInt,
  fixedDelay,
  dynamicDelay,
  fixedRepeater,
};
