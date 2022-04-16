const jssuper = require("jssuper");

// EX 1
// Output = true
let a = function () {
  console.log("OK");
};

console.log(jssuper.isFunc(a));

// EX 2
// Output = false
let b = "function () { console.log('OK'); }";

console.log(jssuper.isFunc(b));
