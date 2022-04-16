const jssuper = require("jssuper");

// EX 1
// Output = false
let a = 0;

console.log(jssuper.isBool(a));

// EX 2
// Output = false
let b = "0";

console.log(jssuper.isBool(b));

// EX 3
// Output = c is a boolean
let c = true;

if (jssuper.isBool(c)) {
  console.log("c is a boolean");
} else {
  console.log("c is not a boolean");
}
