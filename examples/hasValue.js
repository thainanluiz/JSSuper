const jssuper = require("jssuper");

// EX 1
// Output = true
let a = function () {
  console.log("OK");
};

console.log(jssuper.hasValue(a));

// EX 2
// Output = false
let b = null;

console.log(jssuper.hasValue(b));

// EX 3
// Output = false
let c = undefined;

console.log(jssuper.hasValue(c));
